import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Review() {
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
      <Footer />
    </>
  );
}

export default Review;
