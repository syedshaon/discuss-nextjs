import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Search_intput from "./search_intput";
import { Suspense } from "react";

// import { auth } from "@/auth";

// import * as actions from "@/actions/index";
import HeaderAuth from "./HeaderAuth";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <Search_intput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
