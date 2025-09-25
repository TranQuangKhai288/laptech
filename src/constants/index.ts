// Laptop specifications for Vietnam market
export const LAPTOP_BRANDS = [
  "Acer",
  "Apple",
  "ASUS",
  "Dell",
  "HP",
  "Lenovo",
  "LG",
  "MSI",
  "Razer",
  "Samsung",
  "Surface",
  "Xiaomi",
] as const;

export const LAPTOP_CATEGORIES = [
  {
    id: "gaming",
    name: "Laptop Gaming",
    slug: "laptop-gaming",
    description: "Laptop chuyên dụng cho game thủ",
  },
  {
    id: "business",
    name: "Laptop Văn phòng",
    slug: "laptop-van-phong",
    description: "Laptop phù hợp cho công việc văn phòng",
  },
  {
    id: "ultrabook",
    name: "Ultrabook",
    slug: "ultrabook",
    description: "Laptop mỏng nhẹ cao cấp",
  },
  {
    id: "workstation",
    name: "Workstation",
    slug: "workstation",
    description: "Laptop chuyên dụng cho thiết kế, đồ họa",
  },
  {
    id: "budget",
    name: "Laptop Giá rẻ",
    slug: "laptop-gia-re",
    description: "Laptop phù hợp với ngân sách tiết kiệm",
  },
] as const;

export const PROCESSOR_TYPES = [
  "Intel Core i3",
  "Intel Core i5",
  "Intel Core i7",
  "Intel Core i9",
  "AMD Ryzen 3",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
  "Apple M1",
  "Apple M2",
  "Apple M3",
] as const;

export const RAM_OPTIONS = ["4GB", "8GB", "16GB", "32GB", "64GB"] as const;

export const STORAGE_OPTIONS = [
  "256GB SSD",
  "512GB SSD",
  "1TB SSD",
  "2TB SSD",
  "1TB HDD",
  "2TB HDD",
  "512GB SSD + 1TB HDD",
  "1TB SSD + 1TB HDD",
] as const;

export const SCREEN_SIZES = [
  "13.3 inch",
  "14 inch",
  "15.6 inch",
  "16 inch",
  "17.3 inch",
] as const;

export const GRAPHICS_CARDS = [
  "Intel UHD Graphics",
  "Intel Iris Xe Graphics",
  "AMD Radeon Graphics",
  "NVIDIA GeForce GTX 1650",
  "NVIDIA GeForce RTX 3050",
  "NVIDIA GeForce RTX 3060",
  "NVIDIA GeForce RTX 3070",
  "NVIDIA GeForce RTX 3080",
  "NVIDIA GeForce RTX 4050",
  "NVIDIA GeForce RTX 4060",
  "NVIDIA GeForce RTX 4070",
  "NVIDIA GeForce RTX 4080",
] as const;

export const OPERATING_SYSTEMS = [
  "Windows 11 Home",
  "Windows 11 Pro",
  "macOS",
  "Ubuntu",
  "Không OS",
] as const;

// Price ranges for filtering
export const PRICE_RANGES = [
  {
    label: "Dưới 10 triệu",
    min: 0,
    max: 10000000,
  },
  {
    label: "10 - 20 triệu",
    min: 10000000,
    max: 20000000,
  },
  {
    label: "20 - 30 triệu",
    min: 20000000,
    max: 30000000,
  },
  {
    label: "30 - 50 triệu",
    min: 30000000,
    max: 50000000,
  },
  {
    label: "Trên 50 triệu",
    min: 50000000,
    max: Number.MAX_SAFE_INTEGER,
  },
] as const;

// Common laptop features
export const LAPTOP_FEATURES = [
  "Bàn phím có đèn nền",
  "Cảm biến vân tay",
  "Webcam HD",
  "Wi-Fi 6",
  "Bluetooth 5.0",
  "USB-C",
  "Thunderbolt",
  "HDMI",
  "Cổng Ethernet",
  "Thẻ nhớ SD",
  "Jack 3.5mm",
  "Loa stereo",
  "Microphone",
  "Webcam privacy shutter",
  "Fast charging",
] as const;

// Sort options
export const SORT_OPTIONS = [
  {
    value: "popularity",
    label: "Phổ biến nhất",
  },
  {
    value: "newest",
    label: "Mới nhất",
  },
  {
    value: "price-asc",
    label: "Giá thấp đến cao",
  },
  {
    value: "price-desc",
    label: "Giá cao đến thấp",
  },
  {
    value: "rating",
    label: "Đánh giá cao nhất",
  },
  {
    value: "name-asc",
    label: "Tên A-Z",
  },
  {
    value: "name-desc",
    label: "Tên Z-A",
  },
] as const;

// Order status mappings
export const ORDER_STATUS_LABELS = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  processing: "Đang xử lý",
  shipped: "Đã gửi hàng",
  delivered: "Đã giao hàng",
  cancelled: "Đã hủy",
  returned: "Đã trả hàng",
  refunded: "Đã hoàn tiền",
} as const;

export const PAYMENT_STATUS_LABELS = {
  pending: "Chờ thanh toán",
  processing: "Đang xử lý",
  paid: "Đã thanh toán",
  failed: "Thanh toán thất bại",
  cancelled: "Đã hủy",
  refunded: "Đã hoàn tiền",
  partially_refunded: "Hoàn tiền một phần",
} as const;

export const SHIPPING_STATUS_LABELS = {
  pending: "Chờ xử lý",
  processing: "Đang chuẩn bị",
  shipped: "Đã gửi hàng",
  in_transit: "Đang vận chuyển",
  out_for_delivery: "Đang giao hàng",
  delivered: "Đã giao hàng",
  failed: "Giao hàng thất bại",
  returned: "Đã trả hàng",
} as const;

// Payment methods
export const PAYMENT_METHODS = [
  {
    id: "cod",
    name: "Thanh toán khi nhận hàng",
    description: "Thanh toán bằng tiền mặt khi nhận hàng",
    icon: "💵",
  },
  {
    id: "bank_transfer",
    name: "Chuyển khoản ngân hàng",
    description: "Chuyển khoản qua ngân hàng",
    icon: "🏦",
  },
  {
    id: "momo",
    name: "Ví MoMo",
    description: "Thanh toán qua ví điện tử MoMo",
    icon: "📱",
  },
  {
    id: "zalopay",
    name: "ZaloPay",
    description: "Thanh toán qua ví điện tử ZaloPay",
    icon: "💳",
  },
  {
    id: "vnpay",
    name: "VNPay",
    description: "Cổng thanh toán VNPay",
    icon: "💰",
  },
] as const;

// Shipping methods
export const SHIPPING_METHODS = [
  {
    id: "standard",
    name: "Giao hàng tiêu chuẩn",
    description: "3-5 ngày làm việc",
    price: 30000,
    estimatedDays: 5,
  },
  {
    id: "express",
    name: "Giao hàng nhanh",
    description: "1-2 ngày làm việc",
    price: 50000,
    estimatedDays: 2,
  },
  {
    id: "overnight",
    name: "Giao hàng trong ngày",
    description: "Trong vòng 24h (chỉ nội thành)",
    price: 100000,
    estimatedDays: 1,
  },
] as const;

// Vietnamese provinces/cities
export const VIETNAMESE_PROVINCES = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hải Dương",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
  "Phú Yên",
  "Cần Thơ",
  "Đà Nẵng",
  "Hải Phòng",
  "Hà Nội",
  "TP. Hồ Chí Minh",
] as const;

// App configuration
export const APP_CONFIG = {
  name: "LapTech",
  description: "Chuyên cung cấp laptop chất lượng cao với giá cả hợp lý",
  version: "1.0.0",
  author: "LapTech Team",
  email: "support@laptech.vn",
  phone: "1900-xxxx",
  address: "Tầng 10, Tòa nhà ABC, 123 Đường XYZ, Quận 1, TP.HCM",
  social: {
    facebook: "https://facebook.com/laptech",
    twitter: "https://twitter.com/laptech",
    instagram: "https://instagram.com/laptech",
    youtube: "https://youtube.com/laptech",
  },
  defaultCurrency: "VND",
  defaultLanguage: "vi",
  itemsPerPage: 12,
  maxCartItems: 99,
  maxReviewLength: 1000,
  supportedImageTypes: ["image/jpeg", "image/png", "image/webp"],
  maxImageSize: 5 * 1024 * 1024, // 5MB
} as const;
