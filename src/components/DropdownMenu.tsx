import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { ThemeOptions, type Theme } from "../types/theme";

const DropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { Theme, setTheme } = useTheme();

  function themeSelectionHandler(link: Theme): void {
    setTheme(link);
    setDropdownOpen(false);
  }

  return (
    <div className="relative">
        <div className="">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="bg-bk-400 border border-bd-500 text-white font-semibold px-6 py-2 rounded shadow-md flex items-center gap-1 w-64 sm:w-auto md:min-w-[128px] flex sm:flex-none justify-between"
      >
        {Theme} <span className="text-sm">▼</span>
      </button>
      {dropdownOpen && (
        <div className="absolute left-0 w-64 sm:w-auto md:min-w-[128px]">
          <div className=" px-2 bg-white border border-gray-200 shadow-lg rounded-md z-10">
            {ThemeOptions.filter((el) => el !== Theme).map((link) => (
              <h6
                key={link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => themeSelectionHandler(link)}
              >
                {link}
              </h6>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default DropdownMenu;
