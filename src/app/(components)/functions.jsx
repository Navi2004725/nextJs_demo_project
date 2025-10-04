"use client";

import React, { useState } from "react";

function functions() {
  const [pressOk, setPressOk] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleClick = () => {
    if (age >= 18) {
      alert(`Thanks for the response dear ${name}`);
      setPressOk(true);
    } else {
      setPressOk(false); // 🚨 unapproved → force false
      alert("Sorry, you must be 18 or older.");
    }
  };
  return (
    <>
      <h1>Explaining ustate and other fuctionms</h1>
      <div className="flex flex-row gap-3">
        <label>Enter your name here : </label>
        <input className="border-2 border-white" type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} />
        <button className="bg-white text-2xl text-black" onClick={handleClick}>
          Ok
        </button>
        <br />
        <div className="flex flex-row gap-5">
          <label>Enter your age here : </label>
          <input className="border-2 border-white" type="text" placeholder="Enter your name here" onChange={(e) => setAge(Number(e.target.value))} />
          {age >= 18 ? (
            <div className="bg-green-400 text-white rounded-2xl p-[5px]">Approved</div>
          ) : (
            <>
              <div className="bg-red-500 text-white rounded-2xl p-[5px]">Unapproved</div>
              <p className="absolute mt-10 ml-30">* You must need to above 18 years old</p>
            </>
          )}
        </div>
      </div>
      <div>
        {name !== "" && pressOk === true ? (
          <div>
            <p className="text-2xl">
              My name is {name}, and I’m {age} years old. I’m passionate about technology, especially web development, game development, and cybersecurity. I enjoy learning new
              skills, improving my knowledge, and building creative projects. In my free time, I like listening to music, watching the news, and exploring new ideas that help me
              grow.
            </p>
          </div>
        ) : (
          <p className="text-gray-400">Please enter your name and click Ok.</p>
        )}
      </div>
    </>
  );
}

export default functions;
