import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="flex flex-col justify-between max-h-screen font-sans bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <main className="flex flex-col flex-grow justify-between max-h-screen">
        <section className="flex-grow text-center py-8 flex flex-col items-center">
          {/* Title and introduction description for UIPlayground. */}
          <h1 className="text-5xl py-3">
            Welcome to{" "}
            <div className="text-4xl font-bold">
              <span className="text-red-500">U</span>
              <span className="text-orange-500">I</span>
              <span className="text-yellow-500">P</span>
              <span className="text-green-500">l</span>
              <span className="text-teal-500">a</span>
              <span className="text-blue-500">y</span>
              <span className="text-indigo-500">g</span>
              <span className="text-purple-500">r</span>
              <span className="text-pink-500">o</span>
              <span className="text-red-500">u</span>
              <span className="text-orange-500">n</span>
              <span className="text-yellow-500">d</span>
              <span className="text-green-500">!</span>
            </div>
          </h1>
          <p className="w-2/3 text-center mx-auto">
            UIPlayground is a dynamic and interactive frontend sandbox coding
            application designed for developers of all levels. Whether you're a
            seasoned pro or just starting out, UIPlayground provides a versatile
            environment where you can experiment with user interface designs,
            test frontend code, and prototype new ideas in real-time.
          </p>
        </section>

        <section className="flex flex-col flex-grow items-center font-bold text-4xl py-8">
          {/* Typography of Major Languages like HTML, CSS, React, Angular, and JavaScript. */}
          {/* Type the languages in and out, in different colours. */}
          <ReactTyped
            strings={["HTML\n"]}
            typeSpeed={100}
            loop
            backSpeed={100}
            showCursor={true}
            className="text-red-600"
          />

          <ReactTyped
            strings={["CSS\n"]}
            typeSpeed={200}
            loop
            backSpeed={200}
            showCursor={true}
            className="text-blue-600"
          />
          <ReactTyped
            strings={["React\n"]}
            typeSpeed={300}
            loop
            backSpeed={300}
            showCursor={true}
            className="text-purple-600"
          />
          <ReactTyped
            strings={["Angular\n"]}
            typeSpeed={250}
            loop
            backSpeed={250}
            showCursor={true}
            className="text-orange-600"
          />
          <ReactTyped
            strings={["JavaScript\n"]}
            typeSpeed={200}
            loop
            backSpeed={200}
            showCursor={true}
            className="text-emerald-600"
          />
        </section>
        <section className="text-center py-8 flex-grow">
          {/* This is for the 'Get Started' button. */}
          <button className="text-black bg-white px-5 py-2 rounded-3xl">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
}
