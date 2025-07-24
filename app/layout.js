import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "BitLink - link shortner",
  description: "Generate shorten link based on your preferd key",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <Navbar />
        {children}
      </body>
    </html>
  );
}
