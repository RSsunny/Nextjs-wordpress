import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getData() {
  try {
    const res = await fetch(process.env.DATABASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
const MainSection = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto px-2 xl:px-0 my-10">
      <div className="col-span-9">
        <h3 className="text-xl font-bold mb-5">Top News</h3>
        <div className="flex flex-col gap-5">
          {data?.map(({ title, id, excerpt }) => (
            <Link
              href={`/blog/${id}`}
              key={id}
              className="flex flex-col lg:flex-row gap-5"
            >
              <Image
                src={"/banner.png"}
                alt={title?.rendered}
                width={300}
                height={200}
              />
              <div>
                <h4 className="text-xl font-bold mb-3">{title?.rendered}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: excerpt?.rendered || "",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-3 border-l px-2 flex flex-col gap-3">
        <h3>Recent News</h3>
        {data?.map(({ title, id, excerpt }) => (
          <div
            key={id}
            className="flex flex-col xl:flex-row gap-3 xl:items-center"
          >
            <Image
              src={"/banner.png"}
              alt={title?.rendered}
              width={100}
              height={100}
            />
            <div>
              <h4>{title?.rendered}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: excerpt?.rendered?.slice(0, 10) || "",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
