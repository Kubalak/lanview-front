import "../app/globals.css";
 
import { ThemeProvider } from "@material-tailwind/react";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center pt-2">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}