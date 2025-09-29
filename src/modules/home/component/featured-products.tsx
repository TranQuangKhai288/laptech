"use client";
import React from "react";
import Link from "next/link";
import Card from "@/components/core/Card";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { mockProducts } from "@/data/mockProducts";

const FeaturedProducts: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Show featured products
  const featuredProducts = mockProducts.filter((product) => product.isFeatured);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {featuredProducts.map((product) => {
        const mainImage =
          product.images.find((img) => img.isMain) || product.images[0];

        return (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                {mainImage ? (
                  <img
                    src={mainImage.url}
                    alt={mainImage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-4xl">📱</span>
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Mới
                    </span>
                  )}
                  {product.isOnSale && product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-800">
                  <span className="text-red-500">♡</span>
                </button>
              </div>
            </Link>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.brand.name}
                </p>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight">
                    {product.name}
                  </h3>
                </Link>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Features Preview */}
              <div className="space-y-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <p
                    key={index}
                    className="text-xs text-gray-600 dark:text-gray-300 line-clamp-1"
                  >
                    • {feature}
                  </p>
                ))}
              </div>

              {/* Price */}
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

              {/* Stock Status */}
              <div className="text-xs">
                {product.inStock ? (
                  <span className="text-green-600 dark:text-green-400">
                    ✓ Còn hàng
                  </span>
                ) : (
                  <span className="text-red-600 dark:text-red-400">
                    ✗ Hết hàng
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <AddToCartButton
                  product={product}
                  size="sm"
                  text="Thêm giỏ"
                  className="flex-1 text-sm py-2"
                />
                <Link href={`/products/${product.id}`}>
                  <button className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Chi tiết
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FeaturedProducts;
