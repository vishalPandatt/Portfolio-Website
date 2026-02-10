import "./globals.css";
import { firaCode } from "./fonts.js";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Portfolio Website",
  description: "A modern, responsive portfolio website built with React and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
