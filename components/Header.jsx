"use client";
import React from "react";
import Image from "next/image";
import msbww from "../public/assets/msbww.jpg";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:p-14 p-3 ">
      <div className="p-2 flex flex-col gap-4 md:gap-6">
        <div className=" md:text-5xl text-4xl font-bold ">
          Hey! This is Mohammad Shahzil
        </div>
        <div className="text-2xl mb-3 text-[#848484] ">
          A Full Stack Web developer,ensuring every pixel is in its happy place.{" "}
        </div>
      </div>
      <div className="w-2/5 text-3xl items-end flex justify-center">
        <Image alt="Mohammad Shahzil" className="rounded-xl " src={msbww} />
      </div>
    </div>
  );
}
