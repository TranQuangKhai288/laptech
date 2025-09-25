import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import { Providers } from "@/components/providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { MainLayout } from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LapTech - Chuyên cung cấp laptop chất lượng cao",
  description:
    "Chuyên cung cấp laptop chất lượng cao với giá cả hợp lý. Tìm kiếm laptop gaming, văn phòng, ultrabook từ các thương hiệu uy tín.",
  keywords: [
    "laptop",
    "máy tính xách tay",
    "laptop gaming",
    "laptop văn phòng",
    "ultrabook",
    "workstation",
  ],
  authors: [{ name: "LapTech Team" }],
  creator: "LapTech",
  publisher: "LapTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LapTech - Chuyên cung cấp laptop chất lượng cao",
    description: "Chuyên cung cấp laptop chất lượng cao với giá cả hợp lý",
    url: "/",
    siteName: "LapTech",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LapTech - Chuyên cung cấp laptop chất lượng cao",
    description: "Chuyên cung cấp laptop chất lượng cao với giá cả hợp lý",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}
      >
        <AntdRegistry>
          <Providers>
            <MainLayout>{children}</MainLayout>
          </Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
