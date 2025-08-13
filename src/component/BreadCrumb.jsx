import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <nav className="text-sm mb-2 font-inter">
      <Link
        to="/"
        className="hover:text-breadcrumb-purple text-breadcrumb-purple"
      >
        Dashboard
      </Link>
      <span className="mx-1 text-gray-400">/</span>
      <span className="text-breadcrumb-purple font-medium">
        Wimtach Client
      </span>
    </nav>
  );
}
