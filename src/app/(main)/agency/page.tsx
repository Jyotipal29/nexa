import React from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
const page = async () => {
  const authUser = await currentUser();

  console.log(authUser);

  if (!authUser) return redirect("/sign-in");
  return <div>agency dashboard</div>;
};

export default page;
