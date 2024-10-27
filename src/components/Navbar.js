import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white text-purple-300">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-5">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">About</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-500">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;