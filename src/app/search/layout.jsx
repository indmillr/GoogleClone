// STYLES
import "./../globals.css";
import { Inter } from "next/font/google";

// COMPONENTS
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "A Google Clone created with NextJS and Tailwind",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
