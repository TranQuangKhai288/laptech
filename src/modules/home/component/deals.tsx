"use client";

import React from "react";
import { Carousel, Card, Tag, Typography, Row, Col } from "antd";
import {
  ClockCircleOutlined,
  PercentageOutlined,
  GiftOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const dealsData = [
  {
    id: "ad9ecb71-ac00-4607-903d-0270d437222f",
    url: "/",
    categories: [
      {
        type: "laptop",
        title: "Laptop",
        quantity: 117,
      },
    ],
    title: "LAPTOP CHÍNH HÃNG - DEAL RẺ VÔ ĐỊCH",
    sale_percentage: 32,
    gifts: [
      {
        title: "Máy chơi game / Game console",
        quantity: 1,
      },
    ],
    starting_price: "11.990.000",
    from_date: "27/09",
    to_date: "31/10/2024",
    images: [
      "/images/homepage/deal/laptop/01.webp",
      "/images/homepage/deal/laptop/02.webp",
      "/images/homepage/deal/laptop/03.webp",
      "/images/homepage/deal/laptop/04.webp",
      "/images/homepage/deal/laptop/05.webp",
      "/images/homepage/deal/laptop/06.webp",
    ],
  },
  {
    id: "889c98ba-8859-40eb-8512-7ebc5e3cbcd5",
    url: "/",
    categories: [
      {
        type: "asus",
        title: "Laptop",
        quantity: 79,
      },
    ],
    quantity: 79,
    title: "ASUS SALE TO - LO CHI VỀ GIÁ",
    sale_percentage: 48,
    gifts: [
      {
        title: "tai nghe",
        quantity: 3,
      },
    ],
    starting_price: "9.990.000",
    from_date: "18/03/2023",
    to_date: "",
    images: [
      "/images/homepage/deal/asus/01.webp",
      "/images/homepage/deal/asus/02.webp",
      "/images/homepage/deal/asus/03.webp",
      "/images/homepage/deal/asus/04.webp",
      "/images/homepage/deal/asus/05.webp",
      "/images/homepage/deal/asus/06.webp",
    ],
  },
  {
    id: "b627bd03-7ab1-42af-9925-fecc8e9c4eef",
    url: "/",
    categories: [
      {
        type: "workstation",
        title: "Laptop",
        quantity: 58,
      },
    ],
    quantity: 58,
    title: "HIỆU NĂNG ĐỈNH CAO",
    sale_percentage: 42,
    gifts: [
      {
        title: "cục sạc type-C đa năng Ugreen",
        quantity: 1,
      },
    ],
    starting_price: "12.590.000",
    from_date: "18/03/2023",
    to_date: "",
    images: [
      "/images/homepage/deal/workstation/01.webp",
      "/images/homepage/deal/workstation/02.webp",
      "/images/homepage/deal/workstation/03.webp",
      "/images/homepage/deal/workstation/04.webp",
      "/images/homepage/deal/workstation/05.webp",
      "/images/homepage/deal/workstation/06.webp",
    ],
  },
  {
    id: "4b616685-5433-4be9-ab43-22e7a04bc072",
    url: "/",
    categories: [
      {
        type: "gaming",
        title: "Laptop",
        quantity: 151,
      },
    ],
    title: "🔥 HOT SALE 🔥 MUA LAPTOP GAMING TẶNG CHUỘT GAMING",
    sale_percentage: 50,
    gifts: [
      {
        title: "Chuột Gaming Logitech G120 Aura RGB",
        quantity: 1,
      },
    ],
    starting_price: "10.290.000",
    from_date: "23/09/2024",
    to_date: "",
    images: [
      "/images/homepage/deal/gaming/01.webp",
      "/images/homepage/deal/gaming/02.webp",
      "/images/homepage/deal/gaming/03.webp",
      "/images/homepage/deal/gaming/04.webp",
      "/images/homepage/deal/gaming/05.webp",
      "/images/homepage/deal/gaming/06.webp",
    ],
  },
  {
    id: "f7474f4a-9721-4536-896e-b09610374251",
    url: "/",
    categories: [
      {
        title: "Balo",
        quantity: 37,
      },
      {
        title: "Túi",
        quantity: 30,
      },
    ],
    title: "BALO & TÚI GIẢM GIÁ MÙA BACK TO SCHOOL",
    sale_percentage: 75,
    gifts: [
      {
        title: "Quà tặng",
        quantity: 1,
      },
      {
        title: "Phụ kiện & Setup",
        quantity: 3,
      },
    ],
    starting_price: "190.000",
    from_date: "18/07/2024",
    to_date: "",
    images: [
      "/images/homepage/deal/backpack/01.webp",
      "/images/homepage/deal/backpack/02.webp",
      "/images/homepage/deal/backpack/03.webp",
      "/images/homepage/deal/backpack/04.webp",
      "/images/homepage/deal/backpack/05.webp",
      "/images/homepage/deal/backpack/06.webp",
    ],
  },
];
const Deals = () => {
  return (
    <div className="py-4">
      <Carousel
        autoplay
        dots={{ className: "custom-dots" }}
        infinite
        slidesToShow={3}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {dealsData.map((deal) => (
          <div key={deal.id} className="p-2">
            <Card
              hoverable
              style={
                {
                  borderRadius: "12px",
                  maxHeight: "251px",
                  overflow: "hidden",
                  height: "auto",
                  background: "var(--card) / 80",
                  color: "var(--card-foreground)",
                  border: "1px solid var(--border) ",
                  boxShadow:
                    "0 4px 10px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04)",
                  transition: "background .3s, color .3s, border-color .3s",
                } as React.CSSProperties
              }
            >
              {/* Categories and Gifts Tags */}
              <div style={{ marginBottom: "12px" }}>
                <Row gutter={[8, 8]}>
                  {deal.categories.map((category, index) => (
                    <Col key={`cat-${index}`}>
                      <Tag color="blue">
                        {category.quantity} {category.title}
                      </Tag>
                    </Col>
                  ))}
                  {deal.gifts.map((gift, index) => (
                    <Col key={`gift-${index}`}>
                      <Tag color="orange" icon={<GiftOutlined />}>
                        {gift.quantity} {gift.title}
                      </Tag>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Deal Title */}
              <Title
                level={4}
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                  lineHeight: "1.4",
                }}
              >
                {deal.title}
              </Title>

              {/* Sale Info */}
              <div style={{ marginBottom: "12px" }}>
                <Row gutter={8}>
                  <Col>
                    <Tag color="red" icon={<PercentageOutlined />}>
                      -{deal.sale_percentage}%
                    </Tag>
                  </Col>
                  <Col>
                    <Tag color="volcano">Giá chỉ từ {deal.starting_price}đ</Tag>
                  </Col>
                </Row>
              </div>

              {/* Date Range */}
              <div style={{ marginBottom: "16px" }}>
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  <ClockCircleOutlined style={{ marginRight: "4px" }} />
                  Từ {deal.from_date}
                  {deal.to_date && <span> đến {deal.to_date}</span>}
                </Text>
              </div>

              {/* Product Images */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  height: "60px",
                  overflow: "hidden",
                }}
              >
                {deal.images.slice(0, 6).map((image, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      minWidth: "0",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Deal ${deal.id} - ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        // Fallback for missing images
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Deals;
