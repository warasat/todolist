import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-green-900  space-x-32 px-72 py-5 text-center">
      <Link to="/" className="text-2xl hover:bg-white ">
        All
      </Link>
      <Link to="/?todos=active" className="text-2xl hover:bg-white">
        Active
      </Link>
      <Link to="/?todos=completed" className="text-2xl hover:bg-white">
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
