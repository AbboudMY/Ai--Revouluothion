import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm w-full z-50 fixed">
      <div className="app-container flex justify-between items-center h-16">
        {/* LOGO */}
        <span className="gradient-text text-2xl font-bold">AI Revolution</span>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="#" className="nav-btn">
            Get Started
          </a>
        </div>

        {/* MOBILE MNUE BUTTON */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-gray-400 hover:bg-gray-100 foucs:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MNUE */}
      {toggle && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1 ">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="mobile-nav-item">
              {link.name}
            </a>
          ))}
          <a href="#" className="mobile-nav-btn">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
