import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";

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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại - LapTech",
    };
  }

  return {
    title: `${product.name} - LapTech`,
    description: product.description.short,
    openGraph: {
      title: product.name,
      description: product.description.short,
      images: [product.images[0]],
    },
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
};

export default ProductPage;
