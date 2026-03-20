const partners = [
  {
    name: "Pestalozzi International Foundation",
    src: "https://www.figma.com/api/mcp/asset/400fac4f-54b3-46d8-9520-74f0d37a0c78",
    height: "h-[55px]",
  },
  {
    name: "Horizon Foundation",
    src: "https://www.figma.com/api/mcp/asset/16231863-9378-49ae-a2f1-9cbdb5b6a53b",
    height: "h-[65px]",
  },
  {
    name: "RS Academics",
    src: "https://www.figma.com/api/mcp/asset/5df5333a-68cf-4632-ad37-6c5288f2fab1",
    height: "h-[64px]",
  },
  {
    name: "RISE",
    src: "https://www.figma.com/api/mcp/asset/e3f98c99-3ce2-40aa-aade-f6c9e39df224",
    height: "h-[64px]",
    blend: true,
  },
  {
    name: "Teach For All",
    src: "https://www.figma.com/api/mcp/asset/8797bc5b-9649-4e2a-85df-1f70a26ed3bf",
    height: "h-[44px]",
  },
  {
    name: "Ellen MacArthur Foundation",
    src: "https://www.figma.com/api/mcp/asset/35e96e24-9ec3-47f7-8648-3b1d7013f8e7",
    height: "h-[49px]",
    blend: true,
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[110px] items-start">
          <div className="w-full lg:w-[463px] flex flex-col gap-[27px]">
            <h2 className="font-serif-4 text-[36px] lg:text-[60px] leading-[1] text-black">
              A little bit about our work at EAB
            </h2>
            <p className="font-sans-3 text-[18px] font-normal leading-[1.64] text-black max-w-[383px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center w-[185px] py-[13px] px-[30px] bg-[#009482] rounded-[30px] font-sans-3 text-[18px] font-bold text-white hover:bg-[#007a6b] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Donate
            </a>
          </div>

          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-2 items-center space-x-3">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className={`flex items-center justify-center h-[100px] lg:h-[120px] border-b border-gray-300 group/logo`}
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className={`${partner.height} w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105 ${partner.blend ? "mix-blend-darken" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
