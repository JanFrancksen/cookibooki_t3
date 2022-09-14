import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import NavUser from "./NavUser";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";

const NightmodeSwitcher = dynamic(() => import("./NightmodeSwitcher"), {
  ssr: false,
});

const Navbar = () => {
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
      link: "/rezepte",
    },
  ];

  const NavItems = NavitemList.map((item) => {
    return (
      <Link key={item.id} href={item.link}>
        <a>{item.name}</a>
      </Link>
    );
  });

  return (
    <header className="navbar w-full fixed top-0 left-0 p-4 z-50 bg-cb_white dark:bg-cb_blue">
      <div className="w-3/4 m-auto flex justify-between items-center">
        <nav className="flex gap-x-4">{NavItems}</nav>
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          <Link href="/">
            <Image src={Logo} width={80} height={80} />
          </Link>
        </div>
        <div className="flex gap-x-4">
          <NavUser />
          <NightmodeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
