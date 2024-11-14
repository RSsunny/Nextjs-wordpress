import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b shadow-md p-4 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <ul className="flex items-center gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/signin"}>Sign in</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
