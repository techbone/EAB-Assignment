import { useState } from "react";
import {
  FiSearch,
  FiChevronRight,
  FiX,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

const navLinks = [
  {
    label: "About us",
    children: ["What is EAB", "EAB history", "Our structure"],
  },
  { label: "Why EAB", children: [] },
  { label: "Support us", children: [] },
  { label: "Our impact", children: [] },
  { label: "Study at EAB", children: [] },
  { label: "National committees", children: [] },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <nav className="w-full relative z-40">
      <div className="hidden lg:block bg-[#eeeeee]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-[37px] h-[51px]">
          <div className="flex items-center gap-2 cursor-pointer bg-white rounded px-3 py-1.5">
            <span className="font-poppins text-[13px] font-medium text-[#222]">
              English
            </span>
            <FiChevronRight size={7} className="text-[#222] rotate-90" />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-sans-3 text-[18px] font-bold leading-[25.2px] text-[#009482] hover:underline"
            >
              EAB Hub
            </a>
            <div className="w-px h-[14px] bg-[#009482]" />
            <button className="flex items-center gap-1.5 text-black hover:text-[#004a97] transition-colors">
              <FiSearch size={22} />
              <span className="font-sans-3 text-[18px] font-bold">Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-[37px] h-[70px] lg:h-[84px]">
          <a href="#" className="flex items-center gap-2">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5833 15.375V11.9584H35.8749V8.54171H34.1666V6.83337H32.4583V5.12504H29.0416V3.41671H25.6249V1.70837H15.3749V3.41671H11.9583V5.12504H8.54158V6.83337H6.83325V8.54171H5.12492V11.9584H3.41659V15.375H1.70825V27.3334H3.41659V29.0417H5.12492V32.4584H6.83325V34.1667H8.54158V35.875H11.9583V37.5834H15.3749V39.2917H25.6249V37.5834H29.0416V35.875H32.4583V34.1667H34.1666V32.4584H35.8749V29.0417H37.5833V25.625H39.2916V15.375H37.5833ZM35.8749 17.0834V23.9167H30.7499V17.0834H35.8749ZM27.3333 6.83337H29.0416V8.54171H32.4583V11.9584H34.1666V13.6667H29.0416V8.54171H27.3333V6.83337ZM23.9166 30.75V34.1667H22.2083V35.875H18.7916V34.1667H17.0833V30.75H15.3749V27.3334H25.6249V30.75H23.9166ZM27.3333 17.0834V23.9167H13.6666V17.0834H27.3333ZM15.3749 10.25H17.0833V6.83337H18.7916V5.12504H22.2083V6.83337H23.9166V10.25H25.6249V13.6667H15.3749V10.25ZM6.83325 11.9584H8.54158V8.54171H11.9583V6.83337H13.6666V8.54171H11.9583V13.6667H6.83325V11.9584ZM5.12492 23.9167V17.0834H10.2499V23.9167H5.12492ZM8.54158 32.4584V29.0417H6.83325V27.3334H11.9583V32.4584H13.6666V34.1667H11.9583V32.4584H8.54158ZM32.4583 29.0417V32.4584H29.0416V34.1667H27.3333V32.4584H29.0416V27.3334H34.1666V29.0417H32.4583Z"
                fill="#004A97"
              />
            </svg>
            <span className="font-serif-4 text-[36px] lg:text-[50px] font-semibold leading-[1] text-[#004a97]">
              EAB
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-[18px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1 font-sans-3 text-[18px] font-bold leading-[21.6px] text-black hover:text-[#004a97] transition-colors"
              >
                {link.label}
                <FiChevronDown size={11} className="text-black" />
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center w-[100px] h-[46px] bg-[#004a97] rounded-full font-sans-3 text-[18px] font-bold text-white hover:bg-[#003a7a] transition-colors"
            >
              Apply
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-[100px] h-[46px] bg-[#ad1644] rounded-full font-sans-3 text-[18px] font-bold text-white hover:bg-[#8e1238] transition-colors"
            >
              Donate
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button className="flex items-center text-black hover:text-[#004a97] transition-colors">
              <FiSearch size={24} />
            </button>
            <button
              className="text-black p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between px-6 h-[70px] border-b">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
            <a href="#" className="flex items-center gap-2">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5833 15.375V11.9584H35.8749V8.54171H34.1666V6.83337H32.4583V5.12504H29.0416V3.41671H25.6249V1.70837H15.3749V3.41671H11.9583V5.12504H8.54158V6.83337H6.83325V8.54171H5.12492V11.9584H3.41659V15.375H1.70825V27.3334H3.41659V29.0417H5.12492V32.4584H6.83325V34.1667H8.54158V35.875H11.9583V37.5834H15.3749V39.2917H25.6249V37.5834H29.0416V35.875H32.4583V34.1667H34.1666V32.4584H35.8749V29.0417H37.5833V25.625H39.2916V15.375H37.5833ZM35.8749 17.0834V23.9167H30.7499V17.0834H35.8749ZM27.3333 6.83337H29.0416V8.54171H32.4583V11.9584H34.1666V13.6667H29.0416V8.54171H27.3333V6.83337ZM23.9166 30.75V34.1667H22.2083V35.875H18.7916V34.1667H17.0833V30.75H15.3749V27.3334H25.6249V30.75H23.9166ZM27.3333 17.0834V23.9167H13.6666V17.0834H27.3333ZM15.3749 10.25H17.0833V6.83337H18.7916V5.12504H22.2083V6.83337H23.9166V10.25H25.6249V13.6667H15.3749V10.25ZM6.83325 11.9584H8.54158V8.54171H11.9583V6.83337H13.6666V8.54171H11.9583V13.6667H6.83325V11.9584ZM5.12492 23.9167V17.0834H10.2499V23.9167H5.12492ZM8.54158 32.4584V29.0417H6.83325V27.3334H11.9583V32.4584H13.6666V34.1667H11.9583V32.4584H8.54158ZM32.4583 29.0417V32.4584H29.0416V34.1667H27.3333V32.4584H29.0416V27.3334H34.1666V29.0417H32.4583Z"
                  fill="#004A97"
                />
              </svg>
              <span className="font-serif-4 text-[36px] font-semibold text-[#004a97]">
                EAB
              </span>
            </a>
            <div className="w-6" />
          </div>

          <div
            className="px-6 py-4 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 70px)" }}
          >
            {navLinks.map((link) => {
              const isExpanded = expandedItem === link.label;
              const hasChildren = link.children.length > 0;
              return (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (hasChildren) {
                        setExpandedItem(isExpanded ? null : link.label);
                      }
                    }}
                    className={`w-full flex items-center justify-between py-4 border-b border-gray-200 font-sans-3 text-[18px] font-bold ${
                      isExpanded ? "text-[#004a97]" : "text-black"
                    }`}
                  >
                    {link.label}
                    {isExpanded ? (
                      <FiChevronDown size={16} className="text-[#004a97]" />
                    ) : (
                      <FiChevronRight size={16} className="text-[#004a97]" />
                    )}
                  </button>
                  {isExpanded && hasChildren && (
                    <div className="py-2 pl-0 border-b border-gray-200">
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block py-2 font-sans-3 text-[16px] font-normal text-gray-600 hover:text-black transition-colors"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href="#"
              className="flex items-center justify-between py-4 font-sans-3 text-[18px] font-bold text-[#009482]"
            >
              EAB Hub
            </a>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex-1 flex items-center justify-center h-[46px] bg-[#004a97] rounded-full font-sans-3 text-[18px] font-bold text-white"
              >
                Apply
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center h-[46px] bg-[#ad1644] rounded-full font-sans-3 text-[18px] font-bold text-white"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
