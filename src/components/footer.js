"use client"
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import {FaGithub} from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';

export default function Footer() {
    return(
        <footer className="flex w-full flex-row flex-wrap items-center pl-2 pr-2 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between dark:text-white dark:bg-gray-900">
      <Typography className="font-normal flex flex-row justify-center gap-x-2 text-blue-gray dark:text-white">
        &copy; 2023 Jakub Jach <Link href="https://github.com/Kubalak" target="blank"><FaGithub size={20} className="transition-colors duration-300 hover:text-blue-gray-500 dark:hover:text-blue-700"/></Link>
      </Typography>
      <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <div>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white"
          >
            <FiHelpCircle size={25}/>
          </Typography>
        </div>
      </div>
    </footer>
    )
}