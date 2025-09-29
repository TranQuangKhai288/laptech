"use client";
import React from "react";
import DealBanner from "@/modules/home/component/panel";
import ProductCategories from "@/modules/home/component/product-categories";
import Deals from "@/modules/home/component/deals";
import FeaturedProducts from "@/modules/home/component/featured-products";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-4 mb-8 sm:mb-12">
          <DealBanner />
        </section>
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            DANH MỤC NỔI BẬT 🔎
          </h2>
          <ProductCategories />
        </section>
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 dark:text-blue-400">
            Khuyến mãi 🎉
          </h2>
          <div className="p-4 sm:p-6 lg:p-8 bg-[var(--card)] text-[var(--card-foreground)] border-2 border-dashed border-blue-500 dark:border-blue-400 rounded-xl">
            <h3 className="text-xl sm:text-2xl mb-4 font-bold">
              Chương trình khuyến mãi nổi bật
            </h3>
            <Deals />
          </div>
        </section>
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Sản phẩm nổi bật 🌟
          </h2>
          <FeaturedProducts />
        </section>
      </div>
    </div>
  );
}
