import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-14 shadow-xl bg-gray-200">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ">
          <Link href="/">
            <Image
              className=""
              src=""
              width="205"
              height="30"
              alt="Logo"
            />
          </Link>
          <div>
            <ul className="hidden sm:flex">
              <Link href='/recipes'>
                <li className="ml-10 uppercase text-xl">Recipes</li>
              </Link>
              <Link href='/tips'>
                <li className="ml-10 uppercase text-xl">Tips</li>
              </Link>
              <Link href='/contact'>
                <li className="ml-10 uppercase text-xl">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
