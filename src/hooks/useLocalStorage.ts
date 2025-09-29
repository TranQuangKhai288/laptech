import { useState, useEffect, useMemo } from "react";

interface UseLocalStorageOptions<T> {
  defaultValue: T;
  serializer?: {
    read: (value: string) => T;
    write: (value: T) => string;
  };
}

export const useLocalStorage = <T>(
  key: string,
  options: UseLocalStorageOptions<T>
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
  const { defaultValue, serializer } = options;

  const defaultSerializer = {
    read: (value: string): T => {
      try {
        return JSON.parse(value);
      } catch {
        return value as T;
      }
    },
    write: (value: T): string => {
      return typeof value === "string" ? value : JSON.stringify(value);
    },
  };

  const ser = useMemo(() => serializer || defaultSerializer, [serializer]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const item = isClient ? window.localStorage.getItem(key) : null;
      return item ? ser.read(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(ser.read(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key, ser]);

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, ser.write(valueToStore));

        window.dispatchEvent(
          new StorageEvent("storage", {
            key,
            newValue: ser.write(valueToStore),
            storageArea: window.localStorage,
          })
        );
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(defaultValue);

      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);

        window.dispatchEvent(
          new StorageEvent("storage", {
            key,
            newValue: null,
            storageArea: window.localStorage,
          })
        );
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.storageArea === window.localStorage) {
        try {
          const newValue = e.newValue ? ser.read(e.newValue) : defaultValue;
          setStoredValue(newValue);
        } catch (error) {
          console.warn(
            `Error parsing localStorage value for key "${key}":`,
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, defaultValue, ser]);

  return [storedValue, setValue, removeValue];
};
