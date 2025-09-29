import React from "react";
import { Metadata } from "next";
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danh mục sản phẩm - LapTech",
  description: "Khám phá các danh mục laptop phù hợp với nhu cầu của bạn",
};

const categories = [
  {
    id: 1,
    name: "Laptop Gaming",
    description: "Laptop chuyên game với cấu hình mạnh mẽ, card đồ họa cao cấp",
    image: "/images/homepage/popular/laptop-gaming.webp",
    count: 45,
    features: [
      "GPU RTX/GTX",
      "CPU Intel i7/i9",
      "RAM 16GB+",
      "Màn hình 144Hz+",
    ],
    priceRange: "20 - 80 triệu",
  },
  {
    id: 2,
    name: "Laptop Văn Phòng",
    description: "Laptop nhẹ, pin lâu, phù hợp cho công việc văn phòng",
    image: "/images/homepage/popular/laptop-van-phong.webp",
    count: 78,
    features: [
      "Pin 8+ tiếng",
      "Trọng lượng < 1.5kg",
      "CPU tiết kiệm điện",
      "Bảo mật cao",
    ],
    priceRange: "10 - 30 triệu",
  },
  {
    id: 3,
    name: "MacBook",
    description:
      "Laptop Apple với chip M1/M2, thiết kế premium và hiệu năng vượt trội",
    image: "/images/homepage/popular/macbook.webp",
    count: 25,
    features: [
      "Chip Apple Silicon",
      "Retina Display",
      "macOS",
      "Build quality cao",
    ],
    priceRange: "25 - 60 triệu",
  },
  {
    id: 4,
    name: "Laptop Mỏng Nhẹ",
    description: "Ultrabook siêu mỏng nhẹ, thiết kế sang trọng và di động cao",
    image: "/images/homepage/popular/laptop-mong-nhe.webp",
    count: 32,
    features: ["< 15mm", "< 1.3kg", "Thiết kế premium", "Pin cả ngày"],
    priceRange: "15 - 45 triệu",
  },
  {
    id: 5,
    name: "Workstation",
    description: "Laptop chuyên đồ họa, render, thiết kế với cấu hình cao cấp",
    image: "/images/homepage/popular/workstation.webp",
    count: 18,
    features: [
      "GPU Quadro/Professional",
      "CPU Xeon/i9",
      "RAM 32GB+",
      "Màn hình 4K",
    ],
    priceRange: "40 - 150 triệu",
  },
  {
    id: 6,
    name: "Máy Cũ",
    description: "Laptop cũ chất lượng cao, giá cả phải chăng, bảo hành đầy đủ",
    image: "/images/homepage/popular/may-cu.webp",
    count: 65,
    features: [
      "Đã test kỹ",
      "Bảo hành 6-12 tháng",
      "Giá tốt",
      "Chất lượng đảm bảo",
    ],
    priceRange: "5 - 25 triệu",
  },
];

const accessories = [
  {
    id: 7,
    name: "Bàn phím & Chuột",
    description: "Bàn phím cơ, chuột gaming và văn phòng chất lượng cao",
    image: "/images/homepage/popular/keyboard-mouse.webp",
    count: 120,
    priceRange: "200k - 5 triệu",
  },
  {
    id: 8,
    name: "Balo & Túi xách",
    description: "Balo laptop, túi xách bảo vệ laptop an toàn khi di chuyển",
    image: "/images/homepage/popular/backpack.webp",
    count: 85,
    priceRange: "150k - 2 triệu",
  },
  {
    id: 9,
    name: "Giá đỡ & Stand",
    description: "Giá đỡ laptop, tản nhiệt và các phụ kiện hỗ trợ",
    image: "/images/homepage/popular/stand.webp",
    count: 45,
    priceRange: "100k - 1.5 triệu",
  },
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Danh mục sản phẩm
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Khám phá các danh mục laptop phù hợp với nhu cầu của bạn
          </p>
        </div>

        {/* Main Categories */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
              Laptop
            </h2>
            <Link href="/products">
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 w-full sm:w-auto"
              >
                Xem tất cả →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {category.count} sản phẩm
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Đặc điểm nổi bật:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {category.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-center"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 gap-3">
                    <div className="text-center sm:text-left">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Giá từ
                      </p>
                      <p className="font-semibold text-blue-600 dark:text-blue-400">
                        {category.priceRange}
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      className="px-4 py-2 text-sm w-full sm:w-auto"
                    >
                      Xem ngay
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Accessories */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
              Phụ kiện
            </h2>
            <Link href="/accessories">
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 w-full sm:w-auto"
              >
                Xem tất cả →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {accessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {accessory.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {accessory.count}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {accessory.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {accessory.priceRange}
                    </span>
                    <Button
                      variant="ghost"
                      className="text-sm px-3 py-1 w-full sm:w-auto"
                    >
                      Xem →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Brands */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Thương hiệu nổi bật
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              "Apple",
              "Dell",
              "HP",
              "Lenovo",
              "ASUS",
              "Acer",
              "MSI",
              "Razer",
              "LG",
              "Samsung",
              "Microsoft",
              "Xiaomi",
            ].map((brand) => (
              <div
                key={brand}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                    <span className="text-base sm:text-lg font-bold text-gray-600 dark:text-gray-300 group-hover:text-blue-600">
                      {brand.charAt(0)}
                    </span>
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    {brand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
