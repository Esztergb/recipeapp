import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Shopping from "./pages/Shopping";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/signup" element={<SignUp />} />

        
        </Routes>
      <Footer />
    </>
  );
}

export default App;
