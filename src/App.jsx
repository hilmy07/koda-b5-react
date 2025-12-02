import Navbar from "./component/Navbar.jsx";
import Counter from "./component/Counter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-[80vh]">
        <Counter />
      </main>
    </>
  );
}

export default App;
