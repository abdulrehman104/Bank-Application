"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo, close, menu } from "@/app/assets";
import Link from "next/link";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className=" w-full flex py-6 justify-between items-center navbar">
        <Image src={logo} alt="Logo" width={124} height={32} />
        {/* For Desktop */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <Link
              href={nav.id}
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              {nav.title}
            </Link>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="meny"
            width={28}
            height={28}
            className="object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[140] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 ">
              {navLinks.map((nav, index) => (
                <Link
                  href={nav.id}
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } `}
                >
                  {nav.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
