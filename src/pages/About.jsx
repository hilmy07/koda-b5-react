import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hilmy from "../assets/hilmy.png";

function About() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title: form.title, content: form.content };
    localStorage.setItem("review", JSON.stringify(data));

    console.log(data);
  };

  return (
    <>
      <Header />
      <main className="px-6 md:px-20 lg:px-32 py-16 space-y-24">
        {/* ABOUT SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
            <p className="text-gray-700 leading-relaxed">
              I’m Muhammad Hilmy Haidar Aly, a frontend developer from Indonesia
              who enjoys turning interface ideas into clean, responsive web
              experiences. My main focus is building React applications with
              modern tools like Vite, Tailwind CSS, and the Context API, while
              keeping component structures clean, maintainable, and easy to work
              with.
            </p>
          </div>

          {/* SVG Photo */}
          <div className="md:w-1/2 flex justify-center mt-18">
            <svg viewBox="0 0 600 600" className="w-72 md:w-96">
              <circle r="200" cx="250" cy="250" fill="#4DF0DE" />

              <mask id="svgmask1">
                <rect width="600" height="400" fill="black" />
                <circle r="200" cx="250" cy="250" fill="white" />
              </mask>

              <image
                x="-50"
                y="105"
                width="600"
                height="400"
                href={Hilmy}
                mask="url(#svgmask1)"
              />
            </svg>
          </div>
        </section>

        {/* REVIEW */}
        <section className="mt-24 mb-20">
          <h1 className="text-3xl font-bold text-center">Review</h1>
          <hr className="w-24 mx-auto h-[3px] bg-black mt-3" />

          <form
            className="mt-10 flex flex-col items-center gap-6"
            onSubmit={handleSubmit}
          >
            <div className="w-full max-w-lg">
              <label className="font-medium" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1"
              />
            </div>

            <div className="w-full max-w-lg">
              <label className="font-medium" htmlFor="content">
                Content
              </label>
              <textarea
                className="w-full border border-gray-400 rounded-md px-3 py-2 mt-1 h-48"
                id="content"
                name="content"
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              ></textarea>
            </div>

            <div className="w-full max-w-lg flex justify-end">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
