import React from "react";
import { Metadata } from "next";
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";
import Input from "@/components/core/Input";

export const metadata: Metadata = {
  title: "Liên hệ - LapTech",
  description: "Liên hệ với LapTech để được tư vấn và hỗ trợ tốt nhất",
};

const contactInfo = [
  {
    icon: "📍",
    title: "Địa chỉ chính",
    content: "123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM",
    subContent: "Thứ 2 - Thứ 7: 8:00 - 20:00",
  },
  {
    icon: "📞",
    title: "Hotline",
    content: "1900 1234",
    subContent: "Hỗ trợ 24/7 - Miễn phí cuộc gọi",
  },
  {
    icon: "✉️",
    title: "Email",
    content: "info@laptech.vn",
    subContent: "Phản hồi trong vòng 2 giờ",
  },
  {
    icon: "💬",
    title: "Live Chat",
    content: "Chat trực tuyến",
    subContent: "Hỗ trợ tức thì 24/7",
  },
];

const branches = [
  {
    name: "Chi nhánh Hà Nội",
    address: "456 Phố Huế, Hai Bà Trưng, Hà Nội",
    phone: "024.1234.5678",
    hours: "8:00 - 20:00 (T2-T7)",
  },
  {
    name: "Chi nhánh Đà Nẵng",
    address: "789 Hải Phòng, Hải Châu, Đà Nẵng",
    phone: "0236.123.4567",
    hours: "8:00 - 20:00 (T2-T7)",
  },
  {
    name: "Chi nhánh Cần Thơ",
    address: "321 Mậu Thân, Ninh Kiều, Cần Thơ",
    phone: "0292.123.4567",
    hours: "8:00 - 20:00 (T2-T7)",
  },
];

const faqs = [
  {
    question: "Làm thế nào để đổi trả sản phẩm?",
    answer:
      "Bạn có thể đổi trả sản phẩm trong vòng 15 ngày kể từ ngày mua. Sản phẩm cần còn nguyên vẹn, có hóa đơn và đầy đủ phụ kiện.",
  },
  {
    question: "Chính sách bảo hành như thế nào?",
    answer:
      "Tất cả sản phẩm đều được bảo hành chính hãng từ 12-36 tháng tùy theo từng dòng máy. Chúng tôi hỗ trợ bảo hành tại tất cả chi nhánh.",
  },
  {
    question: "Có hỗ trợ trả góp không?",
    answer:
      "Có, chúng tôi hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng và các công ty tài chính uy tín. Thủ tục đơn giản, duyệt nhanh.",
  },
  {
    question: "Thời gian giao hàng bao lâu?",
    answer:
      "Đơn hàng trong nội thành sẽ được giao trong 2-4 giờ. Đơn hàng ngoại tỉnh giao trong 1-3 ngày làm việc.",
  },
];

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn một cách tốt nhất
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                {info.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm sm:text-base">
                {info.content}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {info.subContent}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Gửi tin nhắn cho chúng tôi
            </h2>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Số điện thoại *
                  </label>
                  <Input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="Nhập địa chỉ email"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Chủ đề
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  <option value="">Chọn chủ đề</option>
                  <option value="product">Tư vấn sản phẩm</option>
                  <option value="warranty">Bảo hành</option>
                  <option value="delivery">Giao hàng</option>
                  <option value="payment">Thanh toán</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nội dung *
                </label>
                <textarea
                  rows={5}
                  placeholder="Nhập nội dung tin nhắn..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  Tôi đồng ý với{" "}
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    chính sách bảo mật
                  </span>
                </label>
              </div>

              <Button variant="primary" className="w-full py-2 sm:py-3">
                Gửi tin nhắn
              </Button>
            </form>
          </Card>

          {/* Map & Branches */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <Card className="p-4">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Bản đồ Google Maps</p>
                  <p className="text-sm">
                    123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM
                  </p>
                </div>
              </div>
            </Card>

            {/* Branches */}
            <Card className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                Chi nhánh khác
              </h3>
              <div className="space-y-4">
                {branches.map((branch, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {branch.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      📍 {branch.address}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      📞 {branch.phone}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      🕒 {branch.hours}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 px-4">
              Một số câu hỏi được khách hàng quan tâm nhiều nhất
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Cần hỗ trợ ngay?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              variant="secondary"
              className="px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            >
              Gọi hotline: 1900 1234
            </Button>
            <Button
              variant="ghost"
              className="px-6 sm:px-8 py-2 sm:py-3 border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Chat trực tuyến
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
