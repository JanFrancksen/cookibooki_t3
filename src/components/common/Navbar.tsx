import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import NavUser from "./NavUser";
import Logo from "../../../public/images/cb_logo.png";
import Logo_B from "../../../public/images/cb_logo_b.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const NightmodeSwitcher = dynamic(() => import("./NightmodeSwitcher"), {
  ssr: false,
});

const Navbar = () => {
  const { theme } = useTheme();

  const NavitemList = [
    {
      id: 1,
      name: "Rezepte",
      link: "/rezepte",
    },
    {
      id: 2,
      name: "Affiliates",
      link: "/rezepte",
    },
    {
      id: 3,
      name: "Blog",
      link: "/blog",
    },
  ];

  const NavItems = NavitemList.map((item) => {
    return (
      <Link key={item.id} href={item.link}>
        <a className="hover:text-cb_primary dark:hover:text-cb_secondary transition-colors">
          {item.name}
        </a>
      </Link>
    );
  });

  return (
    <header className="sm:block hidden navbar w-full fixed top-0 left-0 p-1 z-50 backdrop-blur-sm border-b border-cb_black dark:border-cb_white">
      <div className="md:w-3/4 w-full m-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <a>
              {theme === "dark" ? (
                <Image src={Logo} alt="Logo" width={80} height={80} />
              ) : (
                <Image src={Logo_B} alt="Logo" width={80} height={80} />
              )}
            </a>
          </Link>
        </div>
        <nav className="flex gap-x-4 font-serif font-bold uppercase">
          {NavItems}
        </nav>
        <div className="flex gap-x-4 items-center">
          <NavUser />
          <NightmodeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
