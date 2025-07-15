import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contexts/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "سما تاكسي - تطبيق التاكسي الموثوق في السعودية",
  description:
    "رحلتك الموثوقة، بلمسة واحدة فقط. احجز رحلات سريعة وآمنة ومريحة في جميع أنحاء المملكة العربية السعودية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
