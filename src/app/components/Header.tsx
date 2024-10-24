import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 via-green-500 to-green-500 text-white p-5 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">Muhammad Bilal Ahmed Rao</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="transition-colors hover:text-green-600 hover:scale-105 transform duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="transition-colors hover:text-green-600 hover:scale-105 transform duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-green-600 hover:scale-105 transform duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;