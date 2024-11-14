import React from "react";
import Logo from "@/components/shared/Logo";
const Footer = () => {
  return (
    <div className="py-20 border-t px-3 xl:px-0">
      <div className="flex flex-col gap-5 justify-center text-center max-w-7xl mx-auto">
        <Logo />
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sint
          fuga labore repudiandae praesentium, tempore optio molestias impedit
          odit hic.
        </p>
      </div>
    </div>
  );
};

export default Footer;
