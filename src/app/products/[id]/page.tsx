"use client";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";
import { mockProducts } from "@/data/mockProducts";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Button from "@/components/core/Button";
import { MainLayout } from "@/components/layout/Layout";

// Mock data - trong thực tế sẽ fetch từ API
const getProductById = async (id: string) => {
  const products = [
    {
      id: "thinkpad-x1-carbon-gen-11",
      name: "Lenovo ThinkPad X1 Carbon Gen 11",
      brand: "Lenovo",
      model: "X1 Carbon Gen 11",
      price: 45990000,
      originalPrice: 52990000,
      discount: 13,
      rating: 4.8,
      reviewCount: 124,
      availability: "in-stock",
      sku: "LTP-X1C11-001",
      images: [
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/01.webp",
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/02.webp",
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/03.webp",
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/04.webp",
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/05.webp",
        "/images/product-detail/ec65edde-8150-40d0-a32c-cb633f69f2a1/06.webp",
      ],
      category: "Ultrabook",
      tags: ["Business", "Ultrabook", "Premium", "Carbon Fiber"],
      description: {
        short:
          "Laptop doanh nhân cao cấp với thiết kế siêu mỏng nhẹ, hiệu năng mạnh mẽ và độ bền vượt trội.",
        long: `ThinkPad X1 Carbon Gen 11 là đỉnh cao của dòng laptop doanh nhân từ Lenovo. 
        Với thiết kế Carbon Fiber siêu nhẹ chỉ 1.12kg nhưng vẫn đảm bảo độ bền quân đội MIL-STD 810H. 
        Màn hình 14 inch 2.8K sắc nét, bàn phím TrackPoint huyền thoại và pin lên đến 15 tiếng làm việc.
        
        Được trang bị chip Intel Core i7-1365U thế hệ 13 mới nhất, 16GB RAM LPDDR5 và SSD PCIe 4.0 512GB 
        mang lại hiệu năng xử lý vượt trội cho mọi tác vụ từ văn phòng đến đa phương tiện.`,
      },
      specifications: {
        display: {
          size: "14 inch",
          resolution: "2880 x 1800 (2.8K)",
          panel: "IPS LCD",
          brightness: "400 nits",
          colorGamut: "100% sRGB",
          touchscreen: "Không",
          refresh: "60Hz",
        },
        processor: {
          cpu: "Intel Core i7-1365U",
          cores: "10 cores (2P + 8E)",
          threads: "12 threads",
          baseSpeed: "1.3 GHz",
          maxSpeed: "5.2 GHz",
          cache: "12MB",
          architecture: "Intel 7 (10nm)",
        },
        memory: {
          ram: "16GB LPDDR5",
          ramSpeed: "5200 MHz",
          maxRam: "16GB (không thể nâng cấp)",
          storage: "512GB SSD PCIe 4.0 NVMe",
          storageSlots: "1x M.2 2280 PCIe 4.0",
        },
        graphics: {
          gpu: "Intel Iris Xe Graphics",
          vram: "Shared",
          outputs: "2x Thunderbolt 4, 1x HDMI 2.1",
        },
        connectivity: {
          wifi: "Wi-Fi 6E (802.11ax)",
          bluetooth: "Bluetooth 5.1",
          ethernet: "Không có",
          ports: "2x Thunderbolt 4, 2x USB-A 3.2, 1x HDMI 2.1, 1x Audio Jack",
        },
        battery: {
          capacity: "57Wh",
          life: "Lên đến 15 giờ",
          charging: "65W USB-C, Rapid Charge",
        },
        physical: {
          weight: "1.12 kg",
          dimensions: "315.6 x 222.5 x 15.36 mm",
          material: "Carbon Fiber + Magnesium",
          color: "Black",
          durability: "MIL-STD 810H",
        },
        security: {
          fingerprint: "Touch Fingerprint Reader",
          camera: "IR Camera + 1080p Webcam",
          privacy: "ThinkShutter Camera Cover",
          encryption: "TPM 2.0, Secure Boot",
        },
      },
      features: [
        "Thiết kế Carbon Fiber siêu nhẹ chỉ 1.12kg",
        "Màn hình 2.8K IPS sắc nét với 100% sRGB",
        "Bàn phím TrackPoint huyền thoại với đèn nền",
        "Pin 15 tiếng + sạc nhanh 65W",
        "Chuẩn bền quân đội MIL-STD 810H",
        "Bảo mật tối đa với vân tay + IR Camera",
        "Thunderbolt 4 hỗ trợ đa màn hình 4K",
        "Âm thanh Dolby Atmos stereo speakers",
      ],
      pros: [
        "Thiết kế siêu mỏng nhẹ và bền bỉ",
        "Hiệu năng mạnh mẽ với chip Intel Gen 13",
        "Màn hình chất lượng cao 2.8K",
        "Pin trâu lên đến 15 tiếng",
        "Bàn phím xuất sắc với TrackPoint",
        "Tính bảo mật cao",
      ],
      cons: [
        "Giá thành cao",
        "RAM không thể nâng cấp",
        "Không có card đồ họa rời",
        "Cổng kết nối hạn chế",
      ],
      inTheBox: [
        "1x Lenovo ThinkPad X1 Carbon Gen 11",
        "1x Adapter sạc 65W USB-C",
        "1x Cáp USB-C",
        "1x Sách hướng dẫn",
        "1x Thẻ bảo hành",
      ],
      warranty: {
        period: "36 tháng",
        type: "Bảo hành chính hãng toàn cầu",
        support: "Hỗ trợ kỹ thuật 24/7",
      },
    },
  ];

  return products.find((p) => p.id === id) || null;
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const product = mockProducts.find((p) => p.id === params.id);

  const [selectedVariant, setSelectedVariant] = useState<{
    color?: string;
    size?: string;
    storage?: string;
  }>({});

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const mainImage =
    product.images.find((img) => img.isMain) || product.images[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              {mainImage ? (
                <img
                  src={mainImage.url}
                  alt={mainImage.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-6xl">📱</span>
                </div>
              )}
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((image, index) => (
                <div
                  key={image.id}
                  className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {product.brand.name}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
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
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviewCount} đánh giá)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            {/* Variant Options (if applicable) */}
            {product.name.includes("MacBook") && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Màu sắc</h3>
                  <div className="flex gap-2">
                    {["Space Gray", "Silver", "Gold"].map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setSelectedVariant((prev) => ({ ...prev, color }))
                        }
                        className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                          selectedVariant.color === color
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Bộ nhớ</h3>
                  <div className="flex gap-2">
                    {["256GB", "512GB", "1TB"].map((storage) => (
                      <button
                        key={storage}
                        onClick={() =>
                          setSelectedVariant((prev) => ({ ...prev, storage }))
                        }
                        className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                          selectedVariant.storage === storage
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium mb-2">Số lượng</h3>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  −
                </button>
                <span className="px-4 py-2 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stockQuantity, quantity + 1))
                  }
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <p className="text-green-600 text-sm">
                  ✓ Còn hàng ({product.stockQuantity} sản phẩm)
                </p>
              ) : (
                <p className="text-red-600 text-sm">✗ Hết hàng</p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <AddToCartButton
                product={product}
                quantity={quantity}
                variant={
                  Object.keys(selectedVariant).length > 0
                    ? selectedVariant
                    : undefined
                }
                size="lg"
                className="flex-1 py-3"
                text="Thêm vào giỏ hàng"
              />
              <Button
                variant="ghost"
                className="px-6 py-3 border border-gray-300"
              >
                ♡
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tính năng nổi bật</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">✓</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
