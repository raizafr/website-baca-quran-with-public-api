import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Reading from "./pages/Reading";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading/:id" element={<Reading />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
