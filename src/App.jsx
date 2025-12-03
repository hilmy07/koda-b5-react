// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Product from "./pages/Product.jsx";
// import Card from "./pages/Card.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/Product",
//     element: <Product />,
//   },
//   {
//     path: "/Card",
//     element: <Card />,
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hilmy from "./assets/hilmy.png";
import box1 from "./assets/box1.png";
import box2 from "./assets/box2.png";
import box3 from "./assets/box3.png";

function App() {
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
      <main className="px-6 md:px-12 lg:px-20 mt-28">
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between mt-16 gap-12">
          {/* Text kiri */}
          <div className="max-w-xl">
            <h2 className="text-teal-500 text-sm font-semibold tracking-widest">
              UI/UX DESIGNER
            </h2>

            <h1 className="text-xl md:text-5xl font-bold leading-tight mt-3">
              Hello, my name <br /> is Muhammad Hilmy Haidar Aly
            </h1>

            <p className="text-gray-600 mt-4 text-[15px] leading-relaxed">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Projects
              </button>

              <button className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
                LinkedIn
              </button>
            </div>
          </div>

          {/* SVG kanan */}
          <div className="w-full flex justify-center md:justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="720"
              height="629"
              viewBox="0 0 720 629"
              fill="none"
              className="w-[80%] md:w-[70%] lg:w-[60%]"
            >
              <defs>
                <clipPath id="photoClip">
                  <path d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z" />
                </clipPath>
              </defs>

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                fill="#4DF0DE"
              />

              <image
                x="90"
                y="-90"
                width="500"
                height="1000"
                href={Hilmy}
                clipPath="url(#photoClip)"
              />
            </svg>
          </div>
        </section>

        {/* CARD SECTION */}
        <section className="mt-24">
          <h1 className="text-3xl font-bold text-center">Project</h1>
          <hr className="w-24 mx-auto h-[3px] bg-black mt-3" />

          {/* Card grid */}
          <div className="mt-10 space-y-12">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-semibold">Project Name</h1>
                <p className="text-gray-600 mt-2">
                  I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.
                </p>
                <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  View Project
                </button>
              </div>

              <div
                className="bg-gray-300 rounded-lg h-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${box1})` }}
              ></div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="bg-gray-300 rounded-lg h-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${box2})` }}
              ></div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-semibold">Project Name</h1>
                <p className="text-gray-600 mt-2">
                  What was your role, your deliverables, if the project was
                  personal, freelancing.
                </p>
                <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  View Project
                </button>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-semibold">Project Name</h1>
                <p className="text-gray-600 mt-2">
                  You can also add in this description the type of the project,
                  if it was for web, mobile, electron.
                </p>
                <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  View Project
                </button>
              </div>

              <div
                className="bg-gray-300 rounded-lg h-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${box3})` }}
              ></div>
            </div>
          </div>
        </section>

        {/* REVIEW SECTION */}
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
                value={form.title}
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
                value={form.content}
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

export default App;
