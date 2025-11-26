import "./globals.css";
import Providers from "./providers";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export const metadata = {
  title: "Event Management System",
  description: "Simple event management app with Firebase Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
