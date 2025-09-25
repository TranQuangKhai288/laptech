"use client";
import React from "react";
import DealBanner from "@/modules/home/component/panel";
import ProductCategories from "@/modules/home/component/product-categories";
import Deals from "@/modules/home/component/deals";

export default function HomePage() {
  return (
    <>
      <section>
        <DealBanner />
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">DANH MỤC NỔI BẬT 🔎</h2>
        <ProductCategories />
      </section>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-500 dark:text-blue-400">
          Khuyến mãi 🎉
        </h2>
        <div className="p-8 bg-[var(--card)] text-[var(--card-foreground)] border-2 border-dashed border-blue-500 dark:border-blue-400 rounded-xl">
          <section>
            <h3 className="text-2xl mb-4 font-bold">
              Chương trình khuyến mãi nổi bật
            </h3>
            <Deals />
          </section>
        </div>
      </div>
      {/* <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Chọn Laptech?{" "}
          <span className="text-2xl mb-4 font-bold text-red-300">
            Chọn sự Thoải mái, An tâm vì có sự Tận tâm ❤️
          </span>
        </h2>
        <WhyLaptech />
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Gợi ý cho bạn ✨</h2>
        <ProductSuggestions />
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Tìm kiếm nhiều</h2>
        <MostSearchedTags />
      </section> */}
    </>
  );
}
