"use client";
import React from "react";
import Link from "next/link";
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { mockProducts } from "@/data/mockProducts";

// Metadata moved to layout or parent component when using "use client"

const categories = [
  { name: "Tất cả", count: mockProducts.length, active: true },
  { name: "MacBook", count: 1, active: false },
  { name: "Ultrabook", count: 1, active: false },
  { name: "Gaming", count: 0, active: false },
  { name: "Workstation", count: 0, active: false },
];

const ProductsPage: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sản phẩm
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Khám phá bộ sưu tập laptop đa dạng với chất lượng cao và giá cả cạnh
            tranh
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "primary" : "ghost"}
              className="px-6 py-2"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {mockProducts.map((product) => {
            const mainImage =
              product.images.find((img) => img.isMain) || product.images[0];

            return (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                    {mainImage ? (
                      <img
                        src={mainImage.url}
                        alt={mainImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-4xl">📱</span>
                      </div>
                    )}
                  </div>
                </Link>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {product.brand.name}
                    </p>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <p
                        key={index}
                        className="text-xs text-gray-600 dark:text-gray-300"
                      >
                        • {feature}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600 dark:text-red-400">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <AddToCartButton
                      product={product}
                      size="sm"
                      text="Thêm vào giỏ"
                      className="flex-1 text-sm py-2"
                    />
                    <Button variant="ghost" className="px-3 py-2">
                      <span className="text-sm">♡</span>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="ghost" className="px-8 py-3">
            Xem thêm sản phẩm
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Miễn phí vận chuyển
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Giao hàng miễn phí cho đơn hàng trên 10 triệu
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Bảo hành chính hãng
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bảo hành chính hãng từ 12-36 tháng
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Hỗ trợ 24/7
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Đội ngũ hỗ trợ tận tình 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
