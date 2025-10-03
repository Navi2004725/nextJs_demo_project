import Link from "next/link";
import React from "react";

function page() {
  const vegis = [
    {
      id: 1,
      veginame: "carrot",
    },
    {
      id: 2,
      veginame: "beat",
    },
    {
      id: 3,
      veginame: "apple",
    },
    {
      id: 4,
      veginame: "pineapple",
    },
  ];
  return (
    <>
      <div>vegies page</div>
      <ul>
        {vegis.map((vegi) => (
          <li>
            <Link href={`/products/vegis/${vegi.veginame}`}>{vegi.veginame}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default page;
