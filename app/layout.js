import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "@/components/provider/session-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Note It",
  description: "Your Ultimate Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.className, "antialiased", "bg-white")}>
        <SessionProvider>
          <Toaster />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
