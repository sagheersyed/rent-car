import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>This is a student List Title</h1>
      <Link href="/student-list/student-1">Student 1</Link>
      <br />
      <br />
      <Link href="/student-list/student-2">Student 2</Link>
      <br />
      <br />
      <Link href="/student-list/student-3">Student 3</Link>
      <br />
      <br />
      <Link href="/student-list/student-4">Student 4</Link>
    </div>
  );
};

export default StudentList;
