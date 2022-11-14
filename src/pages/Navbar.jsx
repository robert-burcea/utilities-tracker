import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full max-w-[100%] justify-center">
      <Link to="/" className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2">
        ACASA
      </Link>
      <Link
        to="/costuri"
        className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2"
      >
        COSTURI
      </Link>
      <Link
        to="/unitati"
        className="bg-red-100 text-xl shadow-xl rounded-xl p-3 m-2"
      >
        UNITATI
      </Link>
    </div>
  );
};

export default Navbar;
