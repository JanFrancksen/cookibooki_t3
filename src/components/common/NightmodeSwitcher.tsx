import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function NightmodeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full text-cb_secondary dark:text-cb_primary hover:bg-cb_secondary hover:text-cb_white transition-colors dark:hover:bg-cb_primary dark:hover:text-cb_white"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
    </button>
  );
}
