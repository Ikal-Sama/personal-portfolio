import Photo from "./photo";
import Reveal from "./reveal";
import Social from "./social";
import Stats from "./stats";
import { Button } from "./ui/button";

import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <Reveal>
              <span className='text-xl'>Front End Developer</span>
            </Reveal>
            <Reveal>
              <h1 className='h1 mb-6 text-5xl font-bold'>
                Hello I&apos;m <br />
                <span className='text-accent'>Daniel Jhon Bancale</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className='max-w-[500px] mb-9 text-white/80'>
                I excel at crafting elegant digital experiences and I am
                proficient in various programming languages and technologies.
              </p>
            </Reveal>

            {/* button and socials */}
            <Reveal>
              <div className='flex flex-col xl:flex-row items-center gap-8'>
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Social
                    containerStyles='flex gap-6'
                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            {/* photo */}
            <div className='order-1 xl:order-none mb-8 xl:mb-0'>
              <Photo />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
