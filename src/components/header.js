"use client";
import {useState, useEffect} from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { BiLogOut } from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
 
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Users
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="/manage" className="flex items-center">
          Config
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Actions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Network
        </a>
      </Typography>
    </div>
  );
 
  return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-none dark:bg-gray-700 dark:text-white">
        <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium transition-colors hover:text-blue-800"
          >
            <AiFillHome className="w-5 h-5 lg:w-8 lg:h-8"/>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Typography
              as="a"
              href="/logout"
              className="mr-4 cursor-pointer py-1.5 font-medium flex flex-row gap-x-2 items-center"
            >
              Log out <BiLogOut className="w-5 h-5"/>
            </Typography>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
        </Collapse>
      </Navbar>
  )
}