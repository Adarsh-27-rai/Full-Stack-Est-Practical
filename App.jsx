// Question 2: Routing in React from Navigation bar(i have written all compoenents on the same page)

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

const NavBar = () => {
  return (
    <nav className="p-6 border-b-2 border-gray-400">
      <Link to="/" className="m-4">Home</Link>
      <Link to="/about" className="m-4">About</Link>
      <Link to="/contact" className="pm-4">Contact</Link>
    </nav>
  )
}

const Home = () => {
  return (
    <div className="p-5">
      <h1>Welcome to Home Page</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="p-5">
      <h1>This is Contact Page</h1>
    </div>
  )
}

const About = () => {
  return (
    <div className="p-5">
      <h1>This is About Page</h1>
    </div>
  )
}

export default App
