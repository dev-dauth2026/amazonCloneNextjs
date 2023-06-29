import Link from "next/link";
import { FaBars } from "react-icons/fa";
import "./navmenu.css";
const NavMenu = () => {
  return (
    <nav className="flex justify-between px-4 py-2 bg-gray-700 text-white navLists">
      <ul className="flex gap-x-3 text-xs items-center  menuLists">
        <li>
          <Link href="/" className="flex items-center gap-x-3">
            <FaBars />
            All
          </Link>
        </li>
        <li>
          <Link href="/">Sell</Link>
        </li>
        <li>
          <Link href="/">Best Sellars</Link>
        </li>
        <li>
          <Link href="/">Today's Deal</Link>
        </li>
        <li>
          <Link href="/">Prime</Link>
        </li>
        <li>
          <Link href="/">New Releases</Link>
        </li>
        <li>
          <Link href="/">Music</Link>
        </li>
        <li>
          <Link href="/">Books</Link>
        </li>
        <li>
          <Link href="/">Kindle Books</Link>
        </li>
        <li>
          <Link href="/">Customer Service</Link>
        </li>
        <li>
          <Link href="/">Fashion</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
      </ul>
      <div className="streamMovie">
        <h2>Stream Movies and Show with Prime</h2>
      </div>
    </nav>
  );
};
export default NavMenu;
