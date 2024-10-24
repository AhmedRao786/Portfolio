import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section
        id="about"
        className="p-8 md:p-16 bg-gradient-to-r from-white-100 via-white-50 to-greeen-100 text-gray-900"
      >
        <div className="container mx-auto text-center bg-green p-6 shadow-lg rounded-lg transition hover:bg-green-400 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-g-600 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
          "Hello, I’m Muhammad Bilal Ahmed Rao, a passionate Front-end Developer."
          As a front-end developer, I specialize in building responsive, interactive, and user-friendly web interfaces. 
          With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like React.js, I turn design concepts into engaging digital experiences.
          I thrive on solving problems with clean, efficient code and am constantly exploring new tools and technologies to stay at the forefront of web development trends.        
</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="p-8 md:p-16 bg-gradient-to-r from-white-100 via-white-100 to-white-50 text-gray-900"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Here are a few projects I&apos;ve worked on, showcasing my journey in Web Development. 
            These projects reflect the skills I&apos;ve acquired and the
            passion I have for building exceptional web experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-green-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                Project 1
              </h3>
              <p>
                A feature-rich web application built with React and Tailwind
                CSS.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-green-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                Project 2
              </h3>
              <p>
                A dynamic e-commerce website developed using Next.js and
                TypeScript.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-green-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                Project 3
              </h3>
              <p>
                A portfolio website showcasing clean UI design and responsive
                layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-8 md:p-16 bg-gradient-to-r from-green-100 via-green-50 to-green-100 text-gray-900"
      >
        <div className="container mx-auto text-center bg-white p-6 shadow-lg rounded-lg transition hover:bg-green-300 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl mb-6">
            I&apos;m always open to collaborating on new projects or just having a
            chat! Feel free to reach out to me via email at:
            <a
              href="mailto:muhammadbilalahmedrao0786@gmail.com"
              className="text-green-600 hover:underline transition-colors duration-300"
            >
              {" "}
              muhammadbilalahmedrao0786@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;