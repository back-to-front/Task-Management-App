import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ScrollToAnchor from "./components/ScrollToAnchor";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToAnchor />
      <Routes>
        <Route path='/Task-Management-App' element={<Landing />} />
        <Route path='/Task-Management-App/todo' element={<Home />} />
        <Route path='/Task-Management-App/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
