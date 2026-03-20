import { FiChevronUp } from "react-icons/fi";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] hidden lg:flex justify-end">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 bg-[#0b3057] px-5 h-[49px] font-sans-3 text-[18px] font-bold text-white hover:bg-[#092847] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300"
      >
        Back to Top
        <div className="rounded-full bg-white h-6 w-6 flex items-center justify-center">
          <FiChevronUp className="text-black h-5 w-5" />
        </div>
      </button>
    </div>
  );
}
