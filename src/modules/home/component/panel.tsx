import dealBannerData from "@/dumbdata/deal-banner.json";
const DealBanner = () => {
  return (
    <div className="rounded bg-[var(--card)] text-[var(--card-foreground)] container mx-auto flex flex-col md:flex-row items-center border border-border shadow-md transition-colors duration-300">
      <div className="md:w-2/5 backdrop-blur-sm bg-[var(--color)] border-[var(--color-border)] md:text-left md:px-8">
        <h2 className="text-3xl font-bold mb-4">{dealBannerData.title}</h2>
        <p className="mb-10">{dealBannerData.message}</p>
        <a
          href="/"
          className="box-border border-2 border-[rgb(var(--color-primary)/1)] font-bold text-[rgb(var(--color-primary)/1)] text-lg pl-6 py-4 rounded-2xl transition-all duration-300 hover:from-brand-500 hover:to-accent-500 hover:bg-[rgb(var(--color-primary)/1)] hover:text-[rgb(var(--color-primary-foreground)/1)] hover:border-transparent bg-[rgb(var(--color-primary)/0.05)] group"
        >
          <span>Tìm hiểu ngay</span>
          <span className="pr-6 pl-1 transition-all duration-200 group-hover:pl-3 group-hover:pr-4">
            {/* <FaArrowRight className="text-2xl inline-block" /> */}
          </span>
        </a>
      </div>
      <div className="md:w-3/5 mt-8 md:mt-0">
        <a href="/">
          <img
            src={dealBannerData.image.src}
            alt={dealBannerData.image.alt}
            className="h-full w-auto object-cover shadow-md"
          />
        </a>
      </div>
    </div>
  );
};

export default DealBanner;
