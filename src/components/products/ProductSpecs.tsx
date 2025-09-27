import React from "react";

interface ProductSpecsProps {
  specifications: {
    display: {
      size: string;
      resolution: string;
      panel: string;
      brightness: string;
      colorGamut: string;
      touchscreen: string;
      refresh: string;
    };
    processor: {
      cpu: string;
      cores: string;
      threads: string;
      baseSpeed: string;
      maxSpeed: string;
      cache: string;
      architecture: string;
    };
    memory: {
      ram: string;
      ramSpeed: string;
      maxRam: string;
      storage: string;
      storageSlots: string;
    };
    graphics: {
      gpu: string;
      vram: string;
      outputs: string;
    };
    connectivity: {
      wifi: string;
      bluetooth: string;
      ethernet: string;
      ports: string;
    };
    battery: {
      capacity: string;
      life: string;
      charging: string;
    };
    physical: {
      weight: string;
      dimensions: string;
      material: string;
      color: string;
      durability: string;
    };
    security: {
      fingerprint: string;
      camera: string;
      privacy: string;
      encryption: string;
    };
  };
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specifications }) => {
  const specSections = [
    {
      title: "Màn hình",
      icon: "🖥️",
      items: [
        { label: "Kích thước", value: specifications.display.size },
        { label: "Độ phân giải", value: specifications.display.resolution },
        { label: "Loại panel", value: specifications.display.panel },
        { label: "Độ sáng", value: specifications.display.brightness },
        { label: "Gam màu", value: specifications.display.colorGamut },
        { label: "Tần số quét", value: specifications.display.refresh },
        { label: "Cảm ứng", value: specifications.display.touchscreen },
      ],
    },
    {
      title: "Bộ xử lý",
      icon: "⚡",
      items: [
        { label: "CPU", value: specifications.processor.cpu },
        { label: "Số lõi", value: specifications.processor.cores },
        { label: "Số luồng", value: specifications.processor.threads },
        { label: "Tốc độ cơ bản", value: specifications.processor.baseSpeed },
        { label: "Tốc độ tối đa", value: specifications.processor.maxSpeed },
        { label: "Bộ nhớ đệm", value: specifications.processor.cache },
        { label: "Kiến trúc", value: specifications.processor.architecture },
      ],
    },
    {
      title: "Bộ nhớ & Lưu trữ",
      icon: "💾",
      items: [
        { label: "RAM", value: specifications.memory.ram },
        { label: "Tốc độ RAM", value: specifications.memory.ramSpeed },
        { label: "RAM tối đa", value: specifications.memory.maxRam },
        { label: "Ổ cứng", value: specifications.memory.storage },
        { label: "Khe cắm", value: specifications.memory.storageSlots },
      ],
    },
    {
      title: "Đồ họa",
      icon: "🎮",
      items: [
        { label: "GPU", value: specifications.graphics.gpu },
        { label: "VRAM", value: specifications.graphics.vram },
        { label: "Cổng xuất hình", value: specifications.graphics.outputs },
      ],
    },
    {
      title: "Kết nối",
      icon: "📡",
      items: [
        { label: "Wi-Fi", value: specifications.connectivity.wifi },
        { label: "Bluetooth", value: specifications.connectivity.bluetooth },
        { label: "Ethernet", value: specifications.connectivity.ethernet },
        { label: "Cổng kết nối", value: specifications.connectivity.ports },
      ],
    },
    {
      title: "Pin & Sạc",
      icon: "🔋",
      items: [
        { label: "Dung lượng pin", value: specifications.battery.capacity },
        { label: "Thời lượng pin", value: specifications.battery.life },
        { label: "Sạc", value: specifications.battery.charging },
      ],
    },
    {
      title: "Thiết kế & Vật liệu",
      icon: "📏",
      items: [
        { label: "Trọng lượng", value: specifications.physical.weight },
        { label: "Kích thước", value: specifications.physical.dimensions },
        { label: "Chất liệu", value: specifications.physical.material },
        { label: "Màu sắc", value: specifications.physical.color },
        { label: "Độ bền", value: specifications.physical.durability },
      ],
    },
    {
      title: "Bảo mật",
      icon: "🔒",
      items: [
        { label: "Vân tay", value: specifications.security.fingerprint },
        { label: "Camera", value: specifications.security.camera },
        { label: "Riêng tư", value: specifications.security.privacy },
        { label: "Mã hóa", value: specifications.security.encryption },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {specSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {section.title}
              </h3>
            </div>

            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between items-start"
                >
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {item.label}:
                  </span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium text-right flex-1 ml-4">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Specs Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          📋 Tóm tắt thông số
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {specifications.processor.cpu.split(" ")[2]}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">CPU</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {specifications.memory.ram.split(" ")[0]}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">RAM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {specifications.display.size}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Màn hình
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {specifications.physical.weight}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Trọng lượng
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          📊 Đánh giá hiệu năng
        </h3>
        <div className="space-y-4">
          {[
            { label: "Hiệu năng CPU", value: 85, color: "bg-blue-500" },
            { label: "Đồ họa", value: 70, color: "bg-green-500" },
            { label: "Pin", value: 90, color: "bg-yellow-500" },
            { label: "Tính di động", value: 95, color: "bg-purple-500" },
            { label: "Chất lượng màn hình", value: 88, color: "bg-red-500" },
          ].map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {metric.value}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${metric.color} transition-all duration-500`}
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
