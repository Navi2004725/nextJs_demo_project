import React from "react";

function page({ params }) {
  return <div>groceries {params.groceryid}</div>;
}

export default page;
