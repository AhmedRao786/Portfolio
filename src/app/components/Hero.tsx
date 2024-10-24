import React from 'react';

const Hero = () => {
  return (
    <section className="hover:bg-gradient-to-r from-white-300 to-white-300 py-16 flex justify-center items-center">
      <div className="hover:bg-green-400 rounded-lg shadow-lg p-8 max-w-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">
          Welcome to My World
        </h2>
        <p className="mt-4 text-gray-900 animate-fadeIn delay-900">
          Hi, I&#39;m Muhammad Bilal Ahmed Rao, a dedicated Web Developer specializing in creating elegant, scalable, and intuitive web
          solutions. With expertise in React, TypeScript, Next.js & Tailwind CSS, I strive to deliver seamless user experiences. My passion lies in
          crafting cutting-edge applications that merge creativity with
          functionality. I hold a Intermediate degree in Science "Engineeering".
        </p>
      </div>
    </section>
  );
};

export default Hero;