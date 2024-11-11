import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Template from "./template";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Laan Solutions",
  description:
    "Laan Building Solutions, Laan Permit Solutions, Laan Drawing Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Template>{children}</Template>
      </body>
    </html>
  );
}