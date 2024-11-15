import Image from "next/image";
import React from "react";
async function getData() {
  try {
    const res = await fetch(`${process.env.DATABASE_URL}/13`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
const Banner = async () => {
  const data = await getData();
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 my-5 grid grid-cols-12 gap-5">
      <div className="col-span-4">
        <p>Update: 13-11-2024</p>
        <h1 className="text-xl mb-2 font-semibold">{data?.title?.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }} />
      </div>
      <div className="col-span-8">
        <Image
          src={"/banner.png"}
          alt="banner image"
          width={500}
          height={500}
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
