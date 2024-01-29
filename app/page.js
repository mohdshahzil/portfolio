import React from "react";
import Appbar from "@/components/Appbar";
import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GetInTouch from "@/components/GetInTouch";
const page = () => {
  return (
    <div className="h-full w-full overflow-y ">
      <div className="">
        <Appbar />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full md:w-4/6 lg:w-4/6">
          <Divider className="my-4" />
          <Header />
          <Divider className="my-8" />
          <About />
          <Divider className="my-8" />
          <Skills />
          <Divider className="my-8" />
          <GetInTouch />
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
          <h1 className="text-8xl">hey</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
