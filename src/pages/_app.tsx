import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Roboto, Source_Sans_3 } from "next/font/google";

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const sourceSans3 = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Google Analytics or other analytics tracking
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Add your analytics tracking here
      if (typeof window !== "undefined" && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ErrorBoundary>
      <main className={`${roboto.variable} ${sourceSans3.variable}`}>
        <Component {...pageProps} />
      </main>
    </ErrorBoundary>
  );
}

export default MyApp;
