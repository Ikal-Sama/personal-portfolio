"use client";

import Hero from "@/components/hero";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <main className=''>
      <div className='max-w-screen-lg mx-auto'>
        <Hero />

        {/* Resume */}
        <div className='mt-[10rem]'>
          <Resume />
        </div>
      </div>
    </main>
  );
}
