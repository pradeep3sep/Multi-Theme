import { useEffect, useState } from "react";
import { getApi } from "../lib/apiCalls";
import type { Category, CategoryResult } from "../types/theme";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { navLinks } from "../constant";
import DropdownMenu from "./DropdownMenu";

function LucideIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return <i className={`lucide lucide-${name} ${className}`} />;
}

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category>([]);

  async function getCategoryList() {
    const res = await getApi<CategoryResult>("products/category");
    if (res?.categories?.length) {
      setCategories(res.categories);
    }
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  if (categories.length == 0) {
    return (
      <div className="w-64 h-full md:block hidden">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none fixed top-4 left-4 z-50 border border-bd-500 bg-bk-100 text-tx-500 p-2 rounded"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <aside
        className={`
          fixed top-16 left-0 z-40 h-full bg-white shadow-md md:flex md:flex-col md:justify-between
          transition-transform duration-300 w-64
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        {/* Header */}
        <div className="md:h-dvh">
          {/* Menu */}
          <nav className="mt-2">
            <p className="px-4 text-md text-tx-600 uppercase mb-1 md:block">
              All Categories
            </p>

            <div className="mb-4">
              <ul>
                {categories.map((item, i) => (
                  <Link to={"/" + item} key={i}>
                    <li
                      className={`${location.pathname === '/' + item && 'bg-bk-100 text-tx-500'} group flex items-center justify-between px-4 md:py-6 py-2 my-2 hover:bg-bk-100 hover:text-tx-500 cursor-pointer`}
                    >
                      <div className="flex items-center gap-3">
                        <LucideIcon
                          name={item}
                          className="w-5 h-5 text-blue-500"
                        />
                        <span className="text-s md:text-xl inline">
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </nav>
        </div>


        {/* Mobile menu */}
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link,i) => (
              <Link to={link} key={i}>
                <h6 className={`block text-gray-600 hover:text-indigo-900 py-2 px-2 mx-1 rounded ${location.pathname === '/' + link && 'bg-bk-100 text-tx-500'} `}>
                  {link}
                </h6>
              </Link>
            ))}
              <DropdownMenu />
          </div>
      </aside>
    </>
  );
}
