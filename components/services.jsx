import { ArrowDownRight } from "lucide-react";
import Reveal from "./reveal";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "02",
    title: "UX/UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Freelance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Services = () => {
  return (
    <section className='h-full'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-4xl font-semibold'>
          Services<span className='text-accent'>.</span>
        </h1>

        <div className='grid grid-cols-1  lg:grid-cols-2 gap-10 mt-16'>
          {services.map((service, index) => (
            <div key={index} className='border-b border-gray-700 group p-5'>
              <div className='flex justify-between items-center'>
                <h1 className='text-4xl lg:text-5xl font-bold'>
                  {service.number}
                </h1>
                <div className='bg-gray-200 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-black group-hover:-rotate-45 rounded-full w-10 h-10 flex items-center justify-center'>
                  <ArrowDownRight className='stroke-[1px] w-8 h-8' />
                </div>
              </div>

              <div className='mt-5'>
                <Reveal>
                  <h1 className='text-3xl lg:text-4xl font-semibold'>
                    {service.title}
                  </h1>
                </Reveal>
                <Reveal>
                  <p className='mt-5 text-muted-foreground'>
                    {service.description}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
