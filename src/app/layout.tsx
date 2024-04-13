import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/shared/components/Material";
import { Roboto } from "next/font/google";
import { Providers } from "@/store";
import "./globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "VinilloApp",
  description:
    "Sistema de votación de canciones basado en canciones de Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable}`}>
      <Providers>
        <body id="__next">
          <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </Providers>
    </html>
  );
}
