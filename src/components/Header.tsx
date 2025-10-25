import { Link, useLocation } from "react-router-dom";
import { logoImage } from "../assets/images/images";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/navigation";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-900 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={logoImage}
            alt="Niharika Foundation Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="text-2xl font-semibold leading-tight">
            <div>Niharika Foundation</div>
            <div className="text-lg">Career Technical Training Institute</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none hover:text-yellow-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-blue-900 shadow-lg lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent lg:shadow-none"
              : "hidden"
          } lg:flex lg:space-x-4 text-lg font-medium lg:block`}
        >
          <ul className="flex flex-col lg:flex-row p-4 lg:p-0 space-y-2 lg:space-y-0">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded transition duration-200 ${
                    location.pathname === link.path
                      ? "bg-yellow-500 text-white"
                      : "hover:text-yellow-500 hover:bg-blue-800 lg:hover:bg-transparent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
