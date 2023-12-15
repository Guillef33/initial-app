import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "@/components";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-700 p-2 m-2 rounded">
      <Link className="text-white" href="/">
        <HomeIcon className="mr-2" />
        Home
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <>
          <ActiveLink
            key={navItem.path}
            path={navItem.path}
            text={navItem.text}
          />
        </>
      ))}
    </nav>
  );
};
