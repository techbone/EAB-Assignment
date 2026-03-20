import banner from "../assets/BK IMG.png";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[511px] lg:h-[677px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[140px] pb-16 lg:pb-[100px]">
          <h1 className="font-serif-4 text-[60px] lg:text-[70px] leading-[1.05] text-white max-w-[543px] mt-50 mb-10">
            How will you make your mark?
          </h1>
          <a
            href="#"
            className="inline-block font-sans-3 text-[24px] font-bold leading-[28.8px] text-white border-b-2 border-white pb-1 hover:pl-2 hover:opacity-90 transition-all duration-300"
          >
            Apply to study
          </a>
        </div>
      </div>
    </section>
  );
}
