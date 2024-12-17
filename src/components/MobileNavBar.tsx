"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-emerald-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-emerald-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-emerald-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium z-10 text-emerald-500">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Group</Link>
          <Link href="/">Stories</Link>
          <Link href="/sign-in">Login</Link>
        </div>
      )}
    </div>
  );
};
export default MobileNavBar;
