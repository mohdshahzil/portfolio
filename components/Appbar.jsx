import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import ArrowSVG from "./SVG/ArrowSVG";

export default function App() {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <Navbar>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-medium text-2xl text-inherit">M.S</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarBrand>
          <p className="text-inherit text-2xl font-medium ">M. Shahzil</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-[#848484]" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-[#848484]" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#848484]" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#848484]" href="#">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <p className="font-medium  flex hover:text-slate-500 hover:cursor-pointer ">
            Contact Me <ArrowSVG></ArrowSVG>{" "}
          </p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
