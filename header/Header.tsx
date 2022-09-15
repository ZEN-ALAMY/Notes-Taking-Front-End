import React from "react";

//mport { NavLink } from "react-router-dom";

//import NavItem from "./NavItem";

import Link from "next/link";

function Header() {
  return (
    <div className="bg-green-500 sm:bg-red-500 xl:bg-blue-500 h-[21%] flex flex-col  items-center justify-evenly text-black font-mono font-black ">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold">
        NOTES TAKING APP
      </h1>

      <div className="flex flex-row gap-x-4 xl:gap-x-8 sm:gap-x-6">
        <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
          <Link
            href="/"
            className="no-underline text-black font-mono font-semibold"
          >
            <span className="text-sm sm:text-lg xl:text-2xl">HOME</span>
          </Link>
        </button>

        <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
          <Link
            href="/all"
            className="no-underline text-black font-mono font-semibold"
          >
            <span className="text-sm sm:text-lg xl:text-2xl">ALL</span>
          </Link>
        </button>

        <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
          <Link
            href="/add"
            className="no-underline text-black font-mono font-semibold"
          >
            <span className="text-sm sm:text-lg xl:text-2xl">ADD</span>
          </Link>
        </button>

        <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
          <Link
            href="/remove"
            className="no-underline text-black font-mono font-semibold"
          >
            <span className="text-sm sm:text-lg xl:text-2xl">REMOVE</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
