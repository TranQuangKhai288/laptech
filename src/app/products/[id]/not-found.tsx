import React from "react";
import Link from "next/link";
import Button from "@/components/core/Button";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="text-8xl">😵</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Không tìm thấy sản phẩm
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="primary" className="px-8 py-3">
              Xem tất cả sản phẩm
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="px-8 py-3">
              Về trang chủ
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Cần hỗ trợ? Liên hệ với chúng tôi qua{" "}
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              trang liên hệ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
