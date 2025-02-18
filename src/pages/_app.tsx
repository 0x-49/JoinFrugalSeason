import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

// Disable React DevTools warning in production
if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  // @ts-ignore
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
    supportsFiber: true,
    inject: function() {},
    onCommitFiberRoot: function() {},
    onCommitFiberUnmount: function() {},
  };
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
}