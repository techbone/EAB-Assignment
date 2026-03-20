import { FiArrowRight } from "react-icons/fi";
import comrades from "../assets/Frame 8272.png";

const stats = [
  { value: "90%", label: "Employed or in Graduate School" },
  { value: "TOP 100", label: "Worldwide for student satisfaction" },
  { value: "$3 million", label: "Grants given to EAB students" },
  { value: "95%", label: "Employed or in Graduate School" },
  {
    value: "$ 5 million",
    label: "Donated by our partners over the last financial year",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px]">
        <div className="mb-10 lg:mb-[60px]">
          <h2 className="font-serif-4 text-[40px] lg:text-[60px] font-semibold leading-[1.05] text-black">
            EAB.
          </h2>
          <p className="font-serif-4 text-[40px] lg:text-[60px] leading-[1] text-black">
            A global education made here.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-[515px] shrink-0">
            <div className="w-full flex justify-center lg:w-[515px] h-[350px] lg:h-[466px] bg-gray-200 rounded overflow-hidden relative group/img">
              <img
                src={comrades}
                className="w-full transition-transform duration-700 group-hover/img:scale-105"
              />
            </div>
            <div className="w-full lg:w-[478px] bg-[#009482] p-6 lg:p-8 -mt-[120px] relative z-10 mx-auto">
              <p className="font-sans-3 text-[20px] lg:text-[26px] font-semibold leading-[1.2] text-white mb-5">
                At EAB, our mission is to inspire young people to put their
                talents and energy into driving change around the world, no
                matter which future path they choose.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="font-sans-3 text-[18px] font-bold text-white hover:underline"
                >
                  Read more
                </a>
                <div className="flex items-center text-white hover:scale-110 duration-300">
                  <div className="w-[30px] h-px bg-white" />
                  <FiArrowRight size={16} className="-ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-x-6 gap-y-8 lg:gap-x-10 lg:gap-y-[50px] lg:content-start lg:pt-5 flex-1">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center lg:text-left group cursor-default"
              >
                <p className="font-serif-4 text-[48px] lg:text-[30px] xl:text-[60px] leading-[1] text-black group-hover:text-[#004a97] transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="font-sans-3 text-[20px] lg:text-[24px] font-normal leading-[1.2] text-black mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
