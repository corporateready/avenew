import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Botanica Avenew",
  description: "Botanica Avenew site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {/* <style>@reference "./globals.scss"</style> */}
        {children}
      </body>
    </html>
  );
}
