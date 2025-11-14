import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { PHProvider } from "./components/providers/posthog-provider";
import { PostHogPageView } from "./components/posthog-pageview";
import { Suspense } from "react";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Botanica Avenew",
  description: "Botanica Avenew project",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>

      <body className={`${montserrat.variable} bg-[#060916] antialiased`}>
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
        {children}
        <Script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
        </Suspense>
        </PHProvider>
      </body>
    </html>
  );
}
