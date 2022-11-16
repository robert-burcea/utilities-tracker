import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full max-w-[100%] justify-center">
      <Link
        to="/"
        className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2 hover:scale-[110%]"
      >
        ACASA
      </Link>
      <Link
        to="/gaze"
        className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2 hover:scale-[110%]"
      >
        GAZE
      </Link>
      <Link
        to="/curent"
        className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2 hover:scale-[110%]"
      >
        CURENT
      </Link>
    </div>
  );
};

export default Navbar;
