import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط التسجيل كسائق - سما تاكسي",
  description:
    "تعرف على شروط وأحكام التسجيل كسائق في سما تاكسي. انضم إلى عائلتنا واستمتع بفرص عمل مرنة ودخل مجزٍ.",
};

export default function DriverConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
