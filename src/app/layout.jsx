import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "IMDB",
  description: "IMDB Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
