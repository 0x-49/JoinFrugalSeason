import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // **DO NOT REMOVE OR MODIFY**
  useEffect(() => {
    // Global error handler
    window.onerror = (message, source, lineno, colno, error) => {
      window.parent.postMessage({
        type: 'ERROR',
        error: {
          source,
          lineno,
          colno,
          message,
          stack: error?.stack,
        },
      }, '*');
    };

    // Global unhandled rejection handler
    window.onunhandledrejection = (event) => {
      window.parent.postMessage({
        type: 'ERROR',
        error: {
          message: event.reason?.message || event.reason || 'Unknown error',
          stack: event.reason?.stack,
        },
      }, '*');
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      window.parent.postMessage({
        type: 'ROUTE_CHANGE',
        path: router.asPath,
      }, '*');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}