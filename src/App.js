import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import { CardProvider } from "./context/CardContext";
import Cart from "./Pages/Card";

function App() {
  return (
    <CardProvider>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </CardProvider>
  );
}

export default App;
