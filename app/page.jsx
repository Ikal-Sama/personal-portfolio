"use client";

import Hero from "@/components/hero";
import Resume from "@/components/resume";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className=''>
      <div className='max-w-screen-lg mx-auto'>
        <div id='home'>
          <Hero />
        </div>

        {/* Resume */}
        <div id='resume' className='mt-[10rem]'>
          <Resume />
        </div>

        {/* Services */}
        <div id='services'>
          <Services />
        </div>
      </div>
    </main>
  );
}
