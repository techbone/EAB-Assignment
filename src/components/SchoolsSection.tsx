import { FiArrowRight } from "react-icons/fi";

const countries = [
  {
    name: "India",
    flag: "https://www.figma.com/api/mcp/asset/cfc5a9c7-4036-47d0-b47c-d7efd737a3d0",
    active: true,
  },
  {
    name: "France",
    flag: "https://www.figma.com/api/mcp/asset/81d7a9ce-2cdd-4944-8642-432c0715fb4f",
  },
  {
    name: "Germany",
    flag: "https://www.figma.com/api/mcp/asset/22a3e8f7-8575-4afa-8986-6e0bd0beba52",
  },
  {
    name: "Japan",
    flag: "https://www.figma.com/api/mcp/asset/1ad96338-d38e-4c7e-b114-12dff218eb32",
  },
  {
    name: "Canada",
    flag: "https://www.figma.com/api/mcp/asset/2c5a06d0-6536-443b-9c43-3ba77e228e12",
  },
  {
    name: "South Africa",
    flag: "https://www.figma.com/api/mcp/asset/cdd2469e-2ffe-4723-870b-8eb86d7cb10d",
  },
  {
    name: "China",
    flag: "https://www.figma.com/api/mcp/asset/e4ec1623-b785-43c7-a13d-4535d1941b07",
  },
  {
    name: "Thailand",
    flag: "https://www.figma.com/api/mcp/asset/faea2227-c6c4-4f6b-b573-b4cf2c456f7d",
  },
  {
    name: "Russia",
    flag: "https://www.figma.com/api/mcp/asset/dea55486-ada6-45d9-bd46-a64977c80e61",
  },
  {
    name: "Kenya",
    flag: "https://www.figma.com/api/mcp/asset/f82738fa-a11e-4311-b157-4e462efd943c",
  },
];

const schoolCards = [
  {
    tag: "Germany",
    tagBg: "bg-white",
    tagText: "text-black",
    title: "Leveraging the EAB Ripple Effect' for Youth-led Social Change",
    cta: "Read more",
    image:
      "https://www.figma.com/api/mcp/asset/42d31e16-c74f-47da-a8a1-0d0a467e85bf",
    gradient: "linear-gradient(to bottom, rgba(222,99,40,0) 0%, #ad1644 71%)",
  },
  {
    tag: "Alumni Network",
    tagBg: "bg-[#009482]",
    tagText: "text-white",
    title: "A title about volunteering in this National Schools",
    cta: "Volunteer",
    image:
      "https://www.figma.com/api/mcp/asset/d91e7030-a5e1-4baa-be25-6f5d21198238",
    gradient: "linear-gradient(to bottom, rgba(0,148,130,0) 0%, #009482 58%)",
  },
  {
    tag: "What's happening",
    tagBg: "bg-[#0059b9]",
    tagText: "text-white",
    title: "This is a blog/Impact Story linked to this National Schools",
    cta: "Read more",
    image:
      "https://www.figma.com/api/mcp/asset/53f8e2a0-b121-4cf7-b5c6-23b3adfc00cb",
    gradient:
      "linear-gradient(-16deg, rgb(0,74,151) 40%, rgba(0,148,130,0) 90%)",
  },
];

export default function SchoolsSection() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
        <div className="flex items-start justify-between mb-8 lg:mb-28">
          <h2 className="font-serif-4 text-[40px] lg:text-[60px] leading-[1] text-black max-w-[642px]">
            We are present in over 150 countries
          </h2>

          <div className="hidden lg:flex items-center gap-3 pt-2 group/seeall cursor-pointer">
            <a
              href="#"
              className="font-sans-3 text-[24px] font-normal leading-[1.2] text-black hover:opacity-80 transition-opacity whitespace-nowrap border-b border-black pb-1"
            >
              See all National Schools
            </a>
            <FiArrowRight
              size={20}
              className="text-black transition-transform duration-300 group-hover/seeall:translate-x-1"
            />
          </div>
        </div>

        <div className="flex gap-5 lg:gap-8 overflow-x-auto hide-scrollbar pb-2 mb-8 lg:mb-12">
          {countries.map((country) => (
            <div
              key={country.name}
              className="shrink-0 lg:flex-1/10 cursor-pointer group/flag"
            >
              <div className="flex flex-row items-center gap-1">
                <img
                  src={country.flag}
                  alt={`Flag of ${country.name}`}
                  className="w-[44px] h-[44px] object-contain transition-transform duration-300 group-hover/flag:scale-110"
                />
                <span className="font-sans-3 text-[14px] font-semibold leading-[31px] text-black whitespace-nowrap">
                  {country.name}
                </span>
              </div>
              {country.active && (
                <div className="w-full h-[3px] bg-[#004a97] mt-1" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 lg:hidden mb-10">
          <a
            href="#"
            className="font-sans-3 text-[24px] font-normal leading-[1.2] text-black border-b border-black pb-1 whitespace-nowrap"
          >
            See all National Schools
          </a>
          <FiArrowRight size={20} className="text-black" />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[26px] lg:overflow-x-auto lg:hide-scrollbar lg:snap-x lg:snap-mandatory">
          {schoolCards.map((card, i) => (
            <div
              key={i}
              className="w-full lg:w-[360px] h-[500px] lg:h-[589px] lg:shrink-0 overflow-hidden relative lg:snap-start group cursor-pointer"
            >
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-[70%]"
                style={{ background: card.gradient }}
              />

              <div
                className={`absolute top-[27px] left-[22px] px-[10px] py-[10px] h-[36px] flex items-center justify-center font-sans-3 text-[14px] font-normal leading-[1.2] ${card.tagBg} ${card.tagText}`}
              >
                {card.tag}
              </div>

              <div className="absolute bottom-[16px] left-[28px] right-[28px]">
                <p className="font-serif-4 text-[24px] font-semibold leading-[1.2] text-white mb-5">
                  {card.title}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-[13px] px-7 bg-white rounded-[52px] font-sans-3 text-[18px] font-bold text-black hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  {card.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
