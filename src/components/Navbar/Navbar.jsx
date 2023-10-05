import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Sign UP",
    path: "/signup",
  },
  {
    name: "Sign In",
    path: "/signin",
  },
];

const Navbar = () => {
  return (
    <>
      <nav>
        {LINKS.map((link) => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
