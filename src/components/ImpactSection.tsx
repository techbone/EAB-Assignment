import { useState, useRef, useEffect, useCallback } from "react";
import { FiChevronRight } from "react-icons/fi";
import soccer from "../assets/soccer.png";
import drummers from "../assets/drummers.png";

const filters = ["Filter 1", "Filter 2", "Filter 3"];

const impactCards = [
  {
    title: "How EAB changed my life",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    buttonColor: "#777777",
    titleSize: "text-[32px] lg:text-[40px]",
    descSize: "text-[18px] lg:text-[20px]",
    image: drummers,
  },
  {
    title:
      "EAB Partners with Global Fund for Women to Support Girls in Sub-Saharan Africa",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    buttonColor: "#009482",
    titleSize: "text-[32px] lg:text-[40px]",
    descSize: "text-[18px]",
    image: soccer,
  },
  {
    title: "How EAB changed my life",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    buttonColor: "#777777",
    titleSize: "text-[32px] lg:text-[40px]",
    descSize: "text-[18px] lg:text-[20px]",
    image: drummers,
  },
];

export default function ImpactSection() {
  const [activeFilter, setActiveFilter] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = useCallback((index: number, smooth = true) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
        block: "nearest",
        inline: "start",
      });
    }
  }, []);

  // Scroll carousel to Filter 2 (center card) on mount without moving the page
  useEffect(() => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[1]) {
      const card = cards[1] as HTMLElement;
      scrollRef.current.scrollLeft = card.offsetLeft;
    }
  }, []);

  // Update active filter based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      const containerLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const center = containerLeft + containerWidth / 2;

      let closestIndex = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      setActiveFilter(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#edf5ff] w-full py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px]">
        <div className="mb-6 lg:mb-[50px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4 mb-2 lg:mb-4">
            <h2 className="font-serif-4 text-[32px] lg:text-[60px] leading-[1] text-black">
              The impact of EAB
            </h2>
            <p className="font-sans-3 text-[16px] lg:text-[20px] font-normal leading-[1.3] text-black max-w-[728px] block lg:hidden">
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
              vitae congue
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {filters.map((filter, i) => (
                  <div key={filter} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="font-sans-3 text-[24px] lg:text-[32px] font-semibold leading-[32px] text-[#95a4b8] select-none">
                        /
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setActiveFilter(i);
                        scrollToCard(i);
                      }}
                      className={`font-sans-3 text-[18px] lg:text-[24px] font-bold leading-[28.8px] transition-colors ${
                        activeFilter === i
                          ? "text-black"
                          : "text-[#95a4b8] hover:text-black"
                      }`}
                    >
                      {filter}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="font-sans-3 text-[16px] lg:text-[20px] font-normal leading-[1.3] text-black max-w-[728px] hidden lg:block">
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
            vitae congue
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 lg:gap-10 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        >
          {impactCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-4 lg:gap-[47px] min-w-[80vw] sm:min-w-[700px] lg:min-w-[1100px] snap-start shrink-0"
            >
              <div className="max-w-[90vw] sm:max-w-none w-full sm:w-[350px] lg:w-[653px] bg-gray-200 shrink-0 relative overflow-hidden">
                <img src={card.image} className="w-full h-auto" />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3
                  className={`font-serif-4 text-[24px] lg:text-[40px] font-semibold leading-[1.25] text-black mb-3 lg:mb-6 max-w-[383px]`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-sans-3 text-[16px] lg:text-[20px] font-normal leading-[1.42] text-black mb-4 lg:mb-8 max-w-[383px]`}
                >
                  {card.description}
                </p>
                <div className="flex items-center gap-3 lg:gap-4 group/discover cursor-pointer">
                  <div
                    className="w-[44px] h-[44px] lg:w-[54px] lg:h-[53px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/discover:scale-110"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    <FiChevronRight
                      className="text-white transition-transform duration-300 group-hover/discover:translate-x-0.5"
                      size={20}
                    />
                  </div>
                  <span className="font-sans-3 text-[20px] lg:text-[24px] font-semibold leading-[1.4] text-black transition-colors duration-300 group-hover/discover:text-[#004a97]">
                    Discover
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
