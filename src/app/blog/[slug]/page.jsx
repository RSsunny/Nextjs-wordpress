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
    <div className="max-w-xl mx-auto">
      <p>Details page</p>
      <h1>{data?.title?.rendered}</h1>
      {data?.content?.rendered && (
        <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
      )}
    </div>
  );
};

export default DetailsPage;
