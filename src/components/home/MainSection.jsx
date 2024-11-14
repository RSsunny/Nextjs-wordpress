import React from "react";

const MainSection = () => {
  return (
    <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto px-2 xl:px-0 my-10">
      <div className="col-span-9">
        <h1>Main section</h1>
      </div>
      <div className="col-span-3 border-l px-2">sidebar</div>
    </div>
  );
};

export default MainSection;
