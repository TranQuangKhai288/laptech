import React from "react";
import { Metadata } from "next";
import Card from "@/components/core/Card";
import Button from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Về chúng tôi - LapTech",
  description:
    "Tìm hiểu về LapTech - đối tác tin cậy trong việc cung cấp laptop chất lượng cao",
};

const teamMembers = [
  {
    name: "Nguyễn Văn An",
    role: "CEO & Founder",
    image: "/images/team/ceo.jpg",
    description: "10+ năm kinh nghiệm trong ngành công nghệ",
  },
  {
    name: "Trần Thị Bình",
    role: "Technical Director",
    image: "/images/team/technical.jpg",
    description: "Chuyên gia tư vấn công nghệ hàng đầu",
  },
  {
    name: "Lê Minh Cường",
    role: "Sales Manager",
    image: "/images/team/sales.jpg",
    description: "Đội ngũ bán hàng chuyên nghiệp và tận tâm",
  },
  {
    name: "Phạm Thu Hà",
    role: "Customer Support",
    image: "/images/team/support.jpg",
    description: "Hỗ trợ khách hàng 24/7 với thái độ nhiệt tình",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Thành lập công ty",
    description:
      "LapTech được thành lập với tầm nhìn trở thành nhà cung cấp laptop hàng đầu",
  },
  {
    year: "2019",
    title: "Mở rộng sản phẩm",
    description:
      "Đa dạng hóa danh mục với laptop gaming, văn phòng và workstation",
  },
  {
    year: "2020",
    title: "Online Platform",
    description:
      "Ra mắt nền tảng mua sắm online với trải nghiệm người dùng tốt nhất",
  },
  {
    year: "2021",
    title: "10,000+ Khách hàng",
    description: "Đạt mốc 10,000 khách hàng tin tưởng và sử dụng dịch vụ",
  },
  {
    year: "2022",
    title: "Mở chi nhánh",
    description: "Mở rộng với 5 chi nhánh tại các thành phố lớn",
  },
  {
    year: "2023",
    title: "Award Winner",
    description: "Giành giải thương mại điện tử xuất sắc năm 2023",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Chất lượng",
    description: "Cam kết cung cấp sản phẩm chính hãng, chất lượng cao nhất",
  },
  {
    icon: "🤝",
    title: "Tin cậy",
    description: "Xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng",
  },
  {
    icon: "🚀",
    title: "Đổi mới",
    description: "Luôn cập nhật những công nghệ và sản phẩm mới nhất",
  },
  {
    icon: "💝",
    title: "Khách hàng trung tâm",
    description: "Đặt lợi ích và trải nghiệm khách hàng lên hàng đầu",
  },
];

const stats = [
  { number: "50,000+", label: "Khách hàng hài lòng" },
  { number: "1,000+", label: "Sản phẩm đa dạng" },
  { number: "15+", label: "Thương hiệu hàng đầu" },
  { number: "24/7", label: "Hỗ trợ khách hàng" },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Về LapTech
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Chúng tôi là đối tác tin cậy trong việc cung cấp laptop chất lượng
            cao, mang đến những giải pháp công nghệ tốt nhất cho khách hàng.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <Card className="p-6 sm:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Sứ mệnh
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Mang đến những sản phẩm công nghệ chất lượng cao với giá cả hợp
              lý, giúp khách hàng có thể tiếp cận và sử dụng những công nghệ
              tiên tiến nhất để nâng cao hiệu quả công việc và cuộc sống.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🚀</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Tầm nhìn
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Trở thành nhà cung cấp laptop hàng đầu Việt Nam, được khách hàng
              tin tưởng và lựa chọn nhờ chất lượng sản phẩm vượt trội và dịch vụ
              chăm sóc khách hàng tận tâm.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Hành trình phát triển
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Những cột mốc quan trọng trong quá trình phát triển của LapTech
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Mobile layout */}
                  <div className="block sm:hidden w-full pl-10">
                    <Card className="p-4 sm:p-6">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  {/* Desktop layout */}
                  <div
                    className={`hidden sm:block w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="p-4 sm:p-6">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  <div className="absolute left-4 sm:relative sm:left-auto flex items-center justify-center w-4 h-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-900"></div>
                  </div>

                  <div className="hidden sm:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Những con người tài năng và tận tâm đằng sau thành công của
              LapTech
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-500">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Sẵn sàng khám phá?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            Tham gia cùng hàng nghìn khách hàng đã tin tưởng LapTech
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              variant="secondary"
              className="px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            >
              Xem sản phẩm
            </Button>
            <Button
              variant="ghost"
              className="px-6 sm:px-8 py-2 sm:py-3 border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
