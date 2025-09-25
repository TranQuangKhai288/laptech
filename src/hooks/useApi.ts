import { useState, useCallback } from "react";
import { ApiResponse } from "@/types";

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
  transform?: (data: any) => T;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (url: string, options?: RequestInit) => Promise<T | null>;
  reset: () => void;
}

export const useApi = <T = any>(
  options: UseApiOptions<T> = {}
): UseApiReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (
      url: string,
      requestOptions: RequestInit = {}
    ): Promise<T | null> => {
      try {
        setLoading(true);
        setError(null);

        const defaultOptions: RequestInit = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        // Get auth token if available
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("authToken")
            : null;
        if (token) {
          defaultOptions.headers = {
            ...defaultOptions.headers,
            Authorization: `Bearer ${token}`,
          };
        }

        const response = await fetch(url, {
          ...defaultOptions,
          ...requestOptions,
          headers: {
            ...defaultOptions.headers,
            ...requestOptions.headers,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(
            errorData?.message || `HTTP error! status: ${response.status}`
          );
        }

        const result: ApiResponse<T> = await response.json();

        if (!result.success) {
          throw new Error(result.message || "API request failed");
        }

        let transformedData = result.data as T;

        if (options.transform && result.data) {
          transformedData = options.transform(result.data);
        }

        setData(transformedData);
        options.onSuccess?.(transformedData);

        return transformedData;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        options.onError?.(errorMessage);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [options]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
};

// Specialized hooks for common HTTP methods
export const useGet = <T = any>(options: UseApiOptions<T> = {}) => {
  const api = useApi<T>(options);

  const get = useCallback(
    (url: string, params?: Record<string, any>) => {
      const searchParams = params ? new URLSearchParams(params).toString() : "";
      const fullUrl = searchParams ? `${url}?${searchParams}` : url;

      return api.execute(fullUrl, { method: "GET" });
    },
    [api]
  );

  return {
    ...api,
    get,
  };
};

export const usePost = <T = any, D = any>(options: UseApiOptions<T> = {}) => {
  const api = useApi<T>(options);

  const post = useCallback(
    (url: string, data?: D) => {
      return api.execute(url, {
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
      });
    },
    [api]
  );

  return {
    ...api,
    post,
  };
};

export const usePut = <T = any, D = any>(options: UseApiOptions<T> = {}) => {
  const api = useApi<T>(options);

  const put = useCallback(
    (url: string, data?: D) => {
      return api.execute(url, {
        method: "PUT",
        body: data ? JSON.stringify(data) : undefined,
      });
    },
    [api]
  );

  return {
    ...api,
    put,
  };
};

export const useDelete = <T = any>(options: UseApiOptions<T> = {}) => {
  const api = useApi<T>(options);

  const del = useCallback(
    (url: string) => {
      return api.execute(url, { method: "DELETE" });
    },
    [api]
  );

  return {
    ...api,
    delete: del,
  };
};
