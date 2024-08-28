import React from "react";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/global/mode-toggle";
type Prop = {
  user?: null | User;
};
const Navigation = () => {
  return (
    <div className="  px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-[10]">
      <aside className="flex items-center gap-2 relative  ">
        <Image
          src="/nexa.png"
          width={120}
          height={40}
          alt="nexa"
          className="w-full   "
        />

        <span className="text-4xl font-bold absolute left-[80px] bottom-3">
          Nexa
        </span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center  justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>

      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
