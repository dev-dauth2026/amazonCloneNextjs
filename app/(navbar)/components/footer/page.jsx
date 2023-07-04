import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const { links } = styles;
  return (
    <footer className="flex flex-col ">
      <div className="mainFooter bg-gray-700 flex flex-row justify-around  text-white p-6">
        <div className="div1 flex flex-col justify-start ">
          <p className="font-bold mb-2 ">Get to Know Us</p>
          <ul className={links}>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Corporate Information</Link>
            </li>
            <li>
              <Link href="/">Press Releases</Link>
            </li>
            <li>
              <Link href="/">Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className="div2 flex flex-col justify-start ">
          <p className="font-bold mb-2 ">Make Money with Us</p>
          <ul className={links}>
            <li>
              <Link href="/">Protect and build your brand</Link>
            </li>
            <li>
              <Link href="/">Independently Publish with Us</Link>
            </li>
            <li>
              <Link href="/">Sell on Amazon</Link>
            </li>
            <li>
              <Link href="/">Drive with Amazon Flex</Link>
            </li>
            <li>
              <Link href="/">Advertise Your Products</Link>
            </li>
            <li>
              <Link href="/">Associates Program</Link>
            </li>
            <li>
              <Link href="/">Host an Amazon Hub</Link>
            </li>
          </ul>
        </div>
        <div className="div3 flex flex-col justify-start">
          <p className="font-bold mb-2 ">Let Us Help You</p>
          <ul className={links}>
            <li>
              <Link href="/">PCOVID-19 and Amazon</Link>
            </li>
            <li>
              <Link href="/">IYour Account</Link>
            </li>
            <li>
              <Link href="/">Your Orders</Link>
            </li>
            <li>
              <Link href="/">Delivery Rates & Policies</Link>
            </li>
            <li>
              <Link href="/">Returns & Replacements</Link>
            </li>
            <li>
              <Link href="/">Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex copyRight bg-gray-700 text-white p-6 justify-center items-center">
        <p>copyright reserved 2023 | Shoe Store Australia</p>
      </div>
    </footer>
  );
};
export default Footer;
