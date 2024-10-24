import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-green-500 to-green-400 text-white p-5">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold transition-colors hover:text-green-600 duration-300">
          © 2024 Muhammad Bilal Ahmed Rao. All rights reserved.
        </p>
        <div className="mt-3">
          <a
            href="mailto:muhammadbilalahmedrao0786@gmail.com"
            className="text-white hover:text-green-600 hover:underline transition-colors duration-300"
          >
            Contact me via email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;