import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  

  return (
    <header className="bg-bk-100 shadow-sm sticky top-0 z-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold text-tx-500">
            <Link to="/">Multi Theme</Link>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, idx) => (
              <h6 key={idx} className="text-tx-500">
                <Link to={link}>{link}</Link>
              </h6>
            ))}
            <DropdownMenu/>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
