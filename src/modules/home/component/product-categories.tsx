const productCategoriesData = [
  {
    id: "1",
    title: "Laptop gaming",
    image: "/images/homepage/popular/laptop-gaming.webp",
    quantity: 153,
    url: "/product/laptop-gaming",
  },
  {
    id: "2",
    title: "Laptop văn phòng",
    image: "/images/homepage/popular/laptop-van-phong.webp",
    quantity: 229,
    url: "/product/laptop-office",
  },
  {
    id: "3",
    title: "Laptop mỏng nhẹ",
    image: "/images/homepage/popular/laptop-mong-nhe.webp",
    quantity: 78,
    url: "/product/laptop-ultrabook",
  },
  {
    id: "4",
    title: "Laptop 2 trong 1",
    image: "/images/homepage/popular/macbook.webp",
    quantity: 57,
    url: "/product/laptop-2-in-1",
  },
  {
    id: "5",
    title: "Workstation",
    image: "/images/homepage/popular/workstation.webp",
    quantity: 49,
    url: "/product/laptop-workstation",
  },
  {
    id: "6",
    title: "Laptop giá rẻ",
    image: "/images/homepage/popular/may-cu.webp",
    quantity: 174,
    url: "/product/laptop-budget",
  },
  {
    id: "7",
    title: "Bàn phím / Chuột",
    image: "/images/homepage/popular/keyboard-mouse.webp",
    quantity: 229,
    url: "/product/accessories",
  },
  {
    id: "8",
    title: "Giá đỡ laptop",
    image: "/images/homepage/popular/stand.webp",
    quantity: 67,
    url: "/product/accessories",
  },
  {
    id: "9",
    title: "Balo / Túi đựng laptop",
    image: "/images/homepage/popular/backpack.webp",
    quantity: 85,
    url: "/product/accessories",
  },
];

const ProductCategories = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productCategoriesData.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="p-6 container flex flex-col items-center md:flex-row rounded-lg shadow-md bg-[var(--card)] text-[var(--card-foreground)] transition ease-in-out hover:-translate-y-2 hover:text-[var(--primary)] hover:shadow-xl border border-[var(--border))]"
          >
            <div className="md:w-1/5">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="md:w-4/5 md:px-8">
              <p className="font-bold text-xl">{item.title}</p>
              <p className="text-sm">{item.quantity} sản phẩm</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
