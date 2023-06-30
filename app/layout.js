import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./(navbar)/components/navbar/page";
import Footer from "./(navbar)/components/footer/page";
import SearchForm from "./(navbar)/components/searchForm/page";
import styles from "./(navbar)/components/navbar.module.css";
import NavMenu from "./(navbar)/components/navMenu/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Online Shoe Store</title>
        <meta name="description" content="Generated by creat next app" />
      </Head>

      <body className={inter.className}>
        <Navbar />
        <NavMenu />
        <div className={styles.secondSearchForm}>
          <SearchForm />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}