"use client";
import React from "react";

const page = ({ params }) => {
  console.log(params);
  return (
    <>
      {params.lectures.map((lecutre, index) => {
        return <h1 key={index}>{lecutre}</h1>;
      })}
    </>
  );
};

export default page;
