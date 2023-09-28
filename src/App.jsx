import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./Nav";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="m-auto flex flex-col pt-[44px] w-11/12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
