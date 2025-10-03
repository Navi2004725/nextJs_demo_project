import Link from "next/link";
import React from "react";

function page({ params }) {
  return (
    <>
      <div>vege {params.vegid}</div>
      <Link href="/products/vegis">back to vegis page</Link>
    </>
  );
}

export default page;
