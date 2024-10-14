import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className='max-w-screen-lg mx-auto'>
      <div className='flex justify-between p-2 xl:p-5 items-center'>
        <h1 className='text-3xl font-bold'>
          Daniel<span className='text-accent'>.</span>
        </h1>

        <ul className=' gap-5 items-center text-sm hidden lg:flex'>
          <li className='text-accent font-semibold'>Home</li>
          <li>Resume</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>
            <Button className='rounded-full text-sm'>Hire Me</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
