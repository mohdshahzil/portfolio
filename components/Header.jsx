"use client"
import React from "react";
import Image from "next/image";
import msbww from "../public/assets/msbww.jpg";
export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:p-8 p-4 ">
      <div className="w-3/5 md:text-5xl text-4xl font-bold ">Hey! This is Shahzil</div>
      
      <div className="w-2/5 text-3xl items-end flex justify-center">
        <Image alt="Mohammad Shahzil" className="rounded-xl" height={300} src={msbww} />
      </div>
    </div>
  );
}
