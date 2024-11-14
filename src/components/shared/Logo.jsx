import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="text-xl font-semibold">
      Headless <span className="text-green-600">Wordpress</span>
    </Link>
  );
};

export default Logo;
