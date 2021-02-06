import React from "react";
import { Link } from "react-router-dom";

export default function SideNavItem({ handleClose, link, title, svgIcon }) {
  return (
    <Link to={link}>
      <span
        className="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        onClick={handleClose}
      >
        <span className="mr-2">
          {svgIcon}
        </span>
        <span>{title}</span>
      </span>
    </Link>
  );
}
