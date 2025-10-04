import React from "react";
import stylr from "./contactus.module.css";
import Link from "next/link";
import Functions from "../(components)/functions";

function page() {
  return (
    <>
      <h1 className={stylr.link}>Contact us</h1>
      <Link href="/">Back to home</Link>
      <Functions />
    </>
  );
}

export default page;
