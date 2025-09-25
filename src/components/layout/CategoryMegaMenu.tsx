import React from "react";
import Link from "next/link";

const categoryData = {
  laptopCategories: [
    { name: "Laptop gaming", count: 153, icon: "🎮" },
    { name: "Laptop văn phòng", count: 229, icon: "💼" },
    { name: "Laptop mỏng nhẹ", count: 78, icon: "📱" },
    { name: "Laptop 2 trong 1", count: 57, icon: "🔄" },
    { name: "Workstation", count: 49, icon: "🖥️" },
    { name: "Laptop giá rẻ", count: 174, icon: "💰" },
  ],
  accessories: [
    { name: "Bàn phím / Chuột", count: 145, icon: "⌨️" },
    { name: "Ghế công thái học, Bàn nâng hạ", count: 32, icon: "🪑" },
    { name: "Thực tế ảo/ Game Console", count: 28, icon: "🕶️" },
    { name: "Arm màn hình, Màn hình", count: 67, icon: "🖥️" },
    { name: "RAM, Ổ cứng", count: 89, icon: "💾" },
    { name: "Phụ kiện Setup", count: 156, icon: "🔧" },
    { name: "Học tủ", count: 23, icon: "📚" },
    { name: "Cổng chuyển, Sạc", count: 98, icon: "🔌" },
    { name: "Balo", count: 45, icon: "🎒" },
    { name: "Loa", count: 67, icon: "🔊" },
  ],
  brands: {
    Dell: [
      "XPS",
      "Inspiron",
      "Precision",
      "Latitude",
      "Alienware",
      "XPS 13",
      "Dell Inspiron 15",
    ],
    HP: ["ENVY", "Zbook", "Pavilion"],
    Microsoft: ["Surface Pro", "Surface Laptop", "Office"],
    Acer: ["Swift", "Nitro", "Predator"],
    Lenovo: ["ThinkPad", "Yoga", "ThinkBook"],
  },
  popularProducts: [
    {
      name: "Lenovo ThinkPad X1 Carbon Gen 11 i7...",
      price: "32.990.000",
      image: "/images/thinkpad-x1-carbon.png",
    },
  ],
};

const CategoryMegaMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8 h-full max-h-full animate-fadeIn">
      {/* Left Sidebar - Categories */}
      <div className="col-span-3 border-r border-gray-200 dark:border-gray-700 pr-6">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
          Danh mục
        </h3>
        <div className="space-y-3">
          {categoryData.laptopCategories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="flex items-center gap-3 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <div className="flex-1">
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {category.count} sản phẩm
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Phụ kiện
          </h4>
          <div className="space-y-2">
            {categoryData.accessories.slice(0, 4).map((accessory, index) => (
              <Link
                key={index}
                href={`/accessories/${accessory.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-sm">{accessory.icon}</span>
                <span className="truncate">{accessory.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section - Brands */}
      <div className="col-span-6">
        <div className="grid grid-cols-5 gap-4 h-full">
          {/* Quick Brand Access */}
          <div className="col-span-5 mb-4">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                Thương hiệu nổi bật
              </h3>
              <div className="flex gap-2 flex-wrap">
                {["ThinkPad", "Asus Vivobook", "Dell XPS", "Dell Inspiron"].map(
                  (brand) => (
                    <Link
                      key={brand}
                      href={`/brands/${brand
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      {brand}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Brand Columns */}
          {Object.entries(categoryData.brands).map(([brandName, products]) => (
            <div key={brandName} className="space-y-3">
              <Link
                href={`/brands/${brandName.toLowerCase()}`}
                className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>{brandName}</span>
                <span className="text-lg">→</span>
              </Link>

              <div className="space-y-2">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${product
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {product}
                    {product.includes("13") || product.includes("15") ? (
                      <span className="ml-1 text-blue-500">↗</span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Featured Products */}
      <div className="col-span-3 border-l border-gray-200 dark:border-gray-700 pl-6">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
          Sản phẩm nổi bật
        </h3>

        {/* Featured Product */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                {categoryData.popularProducts[0].name}
              </h4>
              <p className="text-red-600 dark:text-red-400 font-bold">
                {categoryData.popularProducts[0].price}₫
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Link
            href="/products"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
          >
            Xem tất cả sản phẩm
          </Link>

          <Link
            href="/deals"
            className="block w-full border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-center py-2 rounded-lg transition-colors"
          >
            🔥 Khuyến mãi hot
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Cần hỗ trợ?
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              📞{" "}
              <span className="text-blue-600 dark:text-blue-400">
                1900 1234
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              💬 Chat trực tuyến 24/7
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              📧{" "}
              <span className="text-blue-600 dark:text-blue-400">
                info@laptech.vn
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
