"use client";
import React, { useState } from "react";
import Button from "@/components/core/Button";
import Card from "@/components/core/Card";
import ProductImages from "./ProductImages";
import ProductSpecs from "./ProductSpecs";
import RelatedProducts from "./RelatedProducts";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    brand: string;
    model: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    availability: string;
    sku: string;
    images: string[];
    category: string;
    tags: string[];
    description: {
      short: string;
      long: string;
    };
    specifications: any;
    features: string[];
    pros: string[];
    cons: string[];
    inTheBox: string[];
    warranty: {
      period: string;
      type: string;
      support: string;
    };
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

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
        className={`text-lg ${
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 overflow-x-auto">
          <span className="whitespace-nowrap">Trang chủ</span>
          <span>›</span>
          <span className="whitespace-nowrap">Sản phẩm</span>
          <span>›</span>
          <span className="whitespace-nowrap">{product.category}</span>
          <span>›</span>
          <span className="text-gray-900 dark:text-white font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16">
          {/* Product Images */}
          <div>
            <ProductImages images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Tags */}
            <div className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {product.brand}
              </span>
              <div className="flex gap-2">
                {product.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                ({product.reviewCount} đánh giá)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-600 dark:text-red-400">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
                  -{product.discount}%
                </span>
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium">
                Tiết kiệm: {formatPrice(product.originalPrice - product.price)}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description.short}
            </p>

            {/* Key Features */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                Đặc điểm nổi bật:
              </h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-600 dark:text-green-400 font-medium">
                Còn hàng - Giao hàng ngay
              </span>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900 dark:text-white">
                  Số lượng:
                </span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" className="flex-1 py-3 text-lg">
                  Thêm vào giỏ hàng
                </Button>
                <Button variant="secondary" className="px-6 py-3">
                  ♡
                </Button>
              </div>

              <Button variant="destructive" className="w-full py-3 text-lg">
                Mua ngay
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Miễn phí vận chuyển
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Giao hàng nhanh 2-4 giờ nội thành
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Bảo hành {product.warranty.period}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.warranty.type}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Đổi trả 15 ngày
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Miễn phí đổi trả trong 15 ngày
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "description", label: "Mô tả" },
                { id: "specifications", label: "Thông số kỹ thuật" },
                { id: "reviews", label: `Đánh giá (${product.reviewCount})` },
                { id: "warranty", label: "Bảo hành" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Mô tả chi tiết
                  </h3>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {product.description.long}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      👍 Ưu điểm
                    </h4>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {pro}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      👎 Nhược điểm
                    </h4>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✗</span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {con}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    📦 Trong hộp có
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.inTheBox.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-blue-500">📦</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <ProductSpecs specifications={product.specifications} />
            )}

            {activeTab === "reviews" && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  Tính năng đánh giá đang được phát triển...
                </p>
              </div>
            )}

            {activeTab === "warranty" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Thông tin bảo hành
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-3xl mb-2">🛡️</div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {product.warranty.period}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Thời gian bảo hành
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      Chính hãng
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {product.warranty.type}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-3xl mb-2">💬</div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {product.warranty.support}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Sản phẩm tương tự
          </h2>
          <RelatedProducts
            currentProductId={product.id}
            category={product.category}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
