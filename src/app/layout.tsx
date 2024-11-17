import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./global.css";
import LayoutSidebar from "./(authenticated)/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full bg-gray-100">
      <body className={twMerge(poppins.className, "min-h-full")}>
        {children}
      </body>
    </html>
  );
}
