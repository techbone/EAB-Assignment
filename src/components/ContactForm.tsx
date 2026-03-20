export default function ContactForm() {
  return (
    <section className="bg-[#0b3057] w-full py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] flex flex-col items-center">
        <h2 className="font-serif-4 text-[40px] lg:text-[60px] leading-none text-white text-center max-w-[642px] mb-10 lg:mb-14">
          We are present in over 150 countries
        </h2>

        <form
          className="w-full max-w-[902px] flex flex-col gap-[22px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <select className="w-full h-[61px] px-8 rounded-[5px] border border-[#cecece] bg-white font-sans-3 text-[18px] font-normal text-black appearance-none outline-none focus:ring-2 focus:ring-[#009482] cursor-pointer">
              <option>Subject *</option>
              <option>General Inquiry</option>
              <option>Admissions</option>
              <option>Donations</option>
              <option>Other</option>
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row gap-[22px]">
            <input
              type="text"
              placeholder="Full Name  *"
              className="w-full sm:flex-1 h-[61px] px-8 rounded-[5px] border border-[#cecece] bg-white font-sans-3 text-[18px] font-normal text-black placeholder-black/70 outline-none focus:ring-2 focus:ring-[#009482]"
            />
            <input
              type="email"
              placeholder="Email address *"
              className="w-full sm:flex-1 h-[61px] px-8 rounded-[5px] border border-[#cecece] bg-white font-sans-3 text-[18px] font-normal text-black placeholder-black/70 outline-none focus:ring-2 focus:ring-[#009482]"
            />
          </div>

          <textarea
            placeholder="Message *"
            className="w-full h-[160px] lg:h-[200px] px-8 py-4 rounded-[5px] border border-[#cecece] bg-white font-sans-3 text-[18px] font-normal text-black placeholder-black/70 outline-none resize-none focus:ring-2 focus:ring-[#009482]"
          />

          <button
            type="submit"
            className="self-center w-[230px] h-[60px] bg-[#ad1644] rounded-[5px] font-sans-3 text-[18px] font-bold text-white hover:bg-[#8e1238] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none transition-all duration-300 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
