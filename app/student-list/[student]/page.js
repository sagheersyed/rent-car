"use client";

import Link from "next/link";
import React from "react";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div style={{ textAlign: "center", margin: "160px 0px" }}>
      <h1
        style={{
          background: "violet",
          padding: "30px",
          display: "inline-block",
          borderRadius: "10px",
          color: "white",
          fontSize: "25px",
        }}>
        {params.student} Details
      </h1>
      <br />
      <br />
      <Link href="/student-list">Back to Student List </Link>
    </div>
  );
};

export default Student;
