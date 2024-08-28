import React from "react";
import { SignIn } from "@clerk/nextjs";
const page = () => {

  console.log("here");
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default page;
