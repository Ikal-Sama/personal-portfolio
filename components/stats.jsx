const Stats = () => {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-5 '>
        <div className='flex items-center gap-4 w-[50px] leading-snug'>
          <h1 className='text-5xl font-bold'>2</h1>
          <span className=' text-slate-300'>Years of Experience</span>
        </div>
        <div className='flex items-center gap-4 w-[50px] leading-snug'>
          <h1 className='text-5xl font-bold'>10+</h1>
          <span className=' text-slate-300'>Projects Completed</span>
        </div>
        <div className='flex items-center gap-4 w-[50px] leading-snug'>
          <h1 className='text-5xl font-bold'>8</h1>
          <span className=' text-slate-300'>Technologies Used</span>
        </div>
        <div className='flex items-center gap-4 w-[50px] leading-snug'>
          <h1 className='text-5xl font-bold'>500</h1>
          <span className=' text-slate-300'>Code Commits</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
