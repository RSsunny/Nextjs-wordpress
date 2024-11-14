import Link from "next/link";
import React from "react";
async function getData() {
  try {
    const res = await fetch(process.env.DATABASE_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);

    return [];
  }
}
const BlogPage = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto px-2 xl:px-0 my-5">
      <h1>This is blog page</h1>
      {data?.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>{title?.rendered}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
