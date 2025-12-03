import React from "react";
import Navbar from "../components/Navbar.jsx";
import Counter from "../components/Counter.jsx";

function Home() {
  return (
    <>
      <header className="pt-8">
        <Navbar />
      </header>
      <main className="flex flex-col h-[80vh] gap-6">
        <div className="mt-8">
          <Counter />
        </div>
      </main>
    </>
  );
}

export default Home;
