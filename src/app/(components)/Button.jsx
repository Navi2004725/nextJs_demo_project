"use client";
{
  /**this is for client page */
}
import React from "react";

const handleClick = () => {
  alert("clicked");
};

function button() {
  return <button onClick={handleClick}>click here</button>;
}

export default button;
