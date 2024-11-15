import React from "react";
async function getData(slug) {
  try {
    const res = await fetch(`${process.env.DATABASE_URL}/${slug}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
const DetailsPage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(parseInt(slug));
  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 grid grid-cols-12 gap-5 my-5">
      <div className="col-span-9">
        <h1>{data?.title?.rendered}</h1>
        {data?.content?.rendered && (
          <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
        )}
      </div>
      <div className="col-span-3">Sidebar</div>
    </div>
  );
};

export default DetailsPage;
