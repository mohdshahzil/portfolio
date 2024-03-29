import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import InstaSVG from "./SVG/InstaSVG";
import LocationSVG from "./SVG/LocationSVG";
import GmailSVG from "./SVG/GmailSVG";
const GetInTouch = () => {
  return (
    <div className="md:p-14 p-3">
      <div className="text-4xl">Get In Touch</div>
      <div className="flex flex-col md:flex-row lg:flex-row   items-center justify-between mt-8">
        <div className="md:w-1/2 lg:w-1/2 w-full md:flex flex-col gap-3 items-center justify-center hidden ">
          <div className="p-4 flex flex-col gap-4 ">
            <div className="flex flex-row gap-3 text-[#848484]">
              <GmailSVG></GmailSVG> theshahzil@gmail.com
            </div>
            <div className="flex flex-row gap-3 text-[#848484]">
              <InstaSVG></InstaSVG> @theshahzil
            </div>
            <div className="flex flex-row gap-3 text-[#848484]">
              <LocationSVG></LocationSVG> Chennai, Tamil Nadu
            </div>
          </div>
        </div>

        <Card className="md:w-1/2 lg:w-1/2 w-full ">
          <CardHeader>
            <CardTitle>Hit Me Up! </CardTitle>
            <CardDescription>Don't Be Shy – Say Hi</CardDescription>
          </CardHeader>
          <form
            action="https://getform.io/f/1ca363dd-eea2-4bf9-8f11-6f4efc4856ce"
            method="POST"
          >
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Full Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="sample@mail.com"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="message"
                    placeholder="In this box, you're the author, editor, and protagonist."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit">Send Pigeon</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default GetInTouch;
