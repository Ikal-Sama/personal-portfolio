"use client";

import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className='max-w-screen-lg mx-auto'>
      <div className='flex justify-between p-2 xl:p-5 items-center'>
        <h1 className='text-3xl font-bold'>
          Daniel<span className='text-accent'>.</span>
        </h1>

        <ul className=' gap-5 items-center text-sm hidden lg:flex'>
          <li
            onClick={() => scrollToSection("home")}
            className='text-accent font-semibold cursor-pointer'
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("resume")}
            className='hover:text-accent text-white  cursor-pointer'
          >
            Resume
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className='hover:text-accent text-white  cursor-pointer'
          >
            Services
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className='hover:text-accent text-white  cursor-pointer'
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("services")}
            className='hover:text-accent text-white  cursor-pointer'
          >
            Contacts
          </li>
          <li>
            <Button className='rounded-full text-sm'>Hire Me</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
