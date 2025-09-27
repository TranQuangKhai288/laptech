import React from "react";
import Link from "next/link";
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

// Mock data - trong thực tế sẽ fetch từ API
const getRelatedProducts = (currentProductId: string, category: string) => {
  const allProducts = [
    {
      id: "legion-5-pro",
      name: "Lenovo Legion 5 Pro 16IAH7H",
      brand: "Lenovo",
      price: 35990000,
      originalPrice: 42990000,
      discount: 16,
      rating: 4.7,
      reviewCount: 89,
      image: "/images/legion-5-pro.png",
      category: "Gaming",
      tags: ["Gaming", "RTX 3070Ti"],
      specs: ["Intel Core i7-12700H", "16GB RAM", "512GB SSD", "RTX 3070Ti"],
    },
    {
      id: "macbook-air-m2",
      name: "MacBook Air M2 13-inch",
      brand: "Apple",
      price: 28990000,
      originalPrice: 32990000,
      discount: 12,
      rating: 4.9,
      reviewCount: 156,
      image: "/images/macbook-air-m2.png",
      category: "Ultrabook",
      tags: ["Apple Silicon", "Ultrabook"],
      specs: ["Apple M2", "8GB RAM", "256GB SSD", "13.6 inch Liquid Retina"],
    },
    {
      id: "zenbook-pro-15",
      name: "ASUS ZenBook Pro 15 OLED",
      brand: "ASUS",
      price: 42990000,
      originalPrice: 48990000,
      discount: 12,
      rating: 4.6,
      reviewCount: 73,
      image: "/images/zenbook-pro-15.png",
      category: "Workstation",
      tags: ["OLED", "Workstation"],
      specs: [
        "Intel Core i7-12700H",
        "32GB RAM",
        "1TB SSD",
        "15.6 inch 4K OLED",
      ],
    },
    {
      id: "thinkpad-x1-yoga",
      name: "Lenovo ThinkPad X1 Yoga Gen 7",
      brand: "Lenovo",
      price: 38990000,
      originalPrice: 44990000,
      discount: 13,
      rating: 4.8,
      reviewCount: 64,
      image: "/images/thinkpad-x1-yoga.png",
      category: "Ultrabook",
      tags: ["2-in-1", "Business"],
      specs: [
        "Intel Core i7-1260P",
        "16GB RAM",
        "512GB SSD",
        "14 inch 2.8K Touch",
      ],
    },
    {
      id: "dell-xps-13",
      name: "Dell XPS 13 9315",
      brand: "Dell",
      price: 32990000,
      originalPrice: 37990000,
      discount: 13,
      rating: 4.7,
      reviewCount: 91,
      image: "/images/dell-xps-13.png",
      category: "Ultrabook",
      tags: ["Premium", "Ultrabook"],
      specs: ["Intel Core i7-1250U", "16GB RAM", "512GB SSD", "13.4 inch FHD+"],
    },
    {
      id: "hp-spectre-x360",
      name: "HP Spectre x360 14",
      brand: "HP",
      price: 35990000,
      originalPrice: 39990000,
      discount: 10,
      rating: 4.5,
      reviewCount: 52,
      image: "/images/hp-spectre-x360.png",
      category: "Ultrabook",
      tags: ["2-in-1", "Premium"],
      specs: ["Intel Core i7-1255U", "16GB RAM", "1TB SSD", "13.5 inch 3K2K"],
    },
  ];

  // Filter products: same category or same brand, exclude current product
  return allProducts
    .filter(
      (product) =>
        product.id !== currentProductId &&
        (product.category === category || product.brand === "Lenovo")
    )
    .slice(0, 4);
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  category,
}) => {
  const relatedProducts = getRelatedProducts(currentProductId, category);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating)
            ? "text-yellow-400"
            : i < rating
            ? "text-yellow-200"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  if (relatedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          Không có sản phẩm tương tự nào được tìm thấy.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Card
          key={product.id}
          className="group hover:shadow-lg transition-shadow duration-300"
        >
          <Link href={`/products/${product.id}`}>
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {product.brand}
                </span>
                <div className="flex gap-1">
                  {product.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ({product.reviewCount})
              </span>
            </div>

            {/* Specs */}
            <div className="space-y-1">
              {product.specs.slice(0, 3).map((spec, index) => (
                <p
                  key={index}
                  className="text-xs text-gray-600 dark:text-gray-300"
                >
                  • {spec}
                </p>
              ))}
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600 dark:text-red-400">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded text-xs font-medium">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button variant="primary" className="flex-1 text-sm py-2">
                Thêm vào giỏ
              </Button>
              <Button variant="ghost" className="px-3 py-2">
                <span className="text-sm">♡</span>
              </Button>
            </div>

            {/* Quick comparison badge */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full text-xs text-blue-600 dark:text-blue-400 hover:underline">
                So sánh với sản phẩm hiện tại
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RelatedProducts;
