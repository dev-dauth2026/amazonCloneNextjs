import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const { links } = styles;
  return (
    <footer className="flex flex-col bg-gray-700 justify-center items-center text-white ">
      {/* footer  1  */}
      <div className="mainFooter  flex flex-row justify-around p-6 gap-16">
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
      {/* footer 1 ends  */}
      <hr className="mt-5 mb-5 h-[2px] bg-gray-900 opacity-20 w-screen" />
      <div className="footer2 flex flex-col justify-center items-center w-screen">
        {/* logo starts */}
        <div className="relative focus:outline pb-5  flex justify-center">
          <Link href="/store" className="flex items-end">
            <p className="text-white font-bold text-3xl ">amazon</p>
          </Link>
          <div className="absolute top-8   w-20 p-0">
            <img src="/amazonLogo.png" alt="" className="w-3/4 " />
          </div>
        </div>
        {/* logo ends  */}
        <div className="branchCountries flex flex-col justify-center  w-3/5 items-center text-[13px] pb-5">
          <div className="flex justify-center items-center w-full ">
            <p className=" text-center">
              Brazil | Canada | China | France | Germany | India | Italy | Japan
              | Mexico Netherlands | Poland | Singapore | Spain |Turkey | United
              Arab Emirates | United Kingdom United States
            </p>
          </div>

          <p>And don't forget:</p>
          <p className="text-center">
            {" "}
            Amazon Advertising | Amazon Web Services | Goodreads Shopbop
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-screen copyRight bg-gray-900 text-white p-6 text-[13px]">
        <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads Notice</p>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};
export default Footer;
