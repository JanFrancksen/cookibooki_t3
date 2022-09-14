import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function NightmodeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <BsFillSunFill className="text-yellow-500" />
      ) : (
        <BsMoonStarsFill className="text-gray-500" />
      )}
    </button>
  );
}
