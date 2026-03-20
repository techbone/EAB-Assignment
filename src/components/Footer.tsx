import {
  FaTelegram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import worldMap from "../assets/WorldMap.png";
import regulator from "../assets/regulator.svg";

const quickLinks1 = [
  "What is EAB",
  "Academic Life",
  "EAB Schools & Colleges",
  "EAB Short Courses",
  "Apply",
  "Support Us",
];

const quickLinks2 = [
  "Jobs",
  "Structure",
  "History",
  "Our impact",
  "National Committee",
  "Donate",
  "Alumni Network",
  "EAB Short Courses",
];

const socialIcons = [
  { icon: FaTelegram, label: "Telegram", size: 28 },
  { icon: FaTiktok, label: "Tiktok", size: 26 },
  { icon: FaInstagram, label: "Instagram", size: 28 },
  { icon: FaYoutube, label: "Youtube", size: 28 },
  { icon: FaXTwitter, label: "X", size: 24 },
];

const footerBarLinks = [
  "Sitemap",
  "Info for parents",
  "Info for educators",
  "FAQs",
  "Media Kit",
  "Terms & conditions",
  "Data Protection Policy",
  "Privacy Policy",
];

function FooterLinkItem({ text }: { text: string }) {
  return (
    <li>
      <a
        href="#"
        className="flex justify-center lg:justify-start items-center  gap-2 font-sans-3 text-[18px] font-semibold leading-[22.63px] text-white/90 hover:text-white transition-colors"
      >
        {text}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#0b3057] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[50px]">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5833 15.3752V11.9585H35.8749V8.54183H34.1666V6.8335H32.4583V5.12516H29.0416V3.41683H25.6249V1.7085H15.3749V3.41683H11.9583V5.12516H8.54158V6.8335H6.83325V8.54183H5.12492V11.9585H3.41659V15.3752H1.70825V27.3335H3.41659V29.0418H5.12492V32.4585H6.83325V34.1668H8.54158V35.8752H11.9583V37.5835H15.3749V39.2918H25.6249V37.5835H29.0416V35.8752H32.4583V34.1668H34.1666V32.4585H35.8749V29.0418H37.5833V25.6252H39.2916V15.3752H37.5833ZM35.8749 17.0835V23.9168H30.7499V17.0835H35.8749ZM27.3333 6.8335H29.0416V8.54183H32.4583V11.9585H34.1666V13.6668H29.0416V8.54183H27.3333V6.8335ZM23.9166 30.7502V34.1668H22.2083V35.8752H18.7916V34.1668H17.0833V30.7502H15.3749V27.3335H25.6249V30.7502H23.9166ZM27.3333 17.0835V23.9168H13.6666V17.0835H27.3333ZM15.3749 10.2502H17.0833V6.8335H18.7916V5.12516H22.2083V6.8335H23.9166V10.2502H25.6249V13.6668H15.3749V10.2502ZM6.83325 11.9585H8.54158V8.54183H11.9583V6.8335H13.6666V8.54183H11.9583V13.6668H6.83325V11.9585ZM5.12492 23.9168V17.0835H10.2499V23.9168H5.12492ZM8.54158 32.4585V29.0418H6.83325V27.3335H11.9583V32.4585H13.6666V34.1668H11.9583V32.4585H8.54158ZM32.4583 29.0418V32.4585H29.0416V34.1668H27.3333V32.4585H29.0416V27.3335H34.1666V29.0418H32.4583Z"
                    fill="white"
                  />
                </svg>

                <span className="font-serif-4 text-[40px] lg:text-[50px] leading-[1] text-white">
                  EAB
                </span>
              </div>
              <p className="text-center lg:text-left font-sans-3 text-[18px] font-normal leading-[24.7px] tracking-[0.24px] text-white/90 mb-6">
                EAB International, Third Floor, 55 New Oxford, WC1A 1BS, UK
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialIcons.map(({ icon: Icon, label, size }) => (
                  <a
                    key={label}
                    href="#"
                    className="text-white hover:text-white/70 hover:scale-125 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={size} />
                  </a>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <img className="mt-10 flex" src={regulator} />
              </div>
            </div>

            <div>
              <h3 className="font-serif-4 text-[25px] leading-[37.5px] text-white mb-8 text-center lg:text-left">
                Quick links
              </h3>
              <ul className="space-y-2">
                {quickLinks1.map((link) => (
                  <FooterLinkItem key={link} text={link} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif-4 text-[25px] leading-[37.5px] text-white mb-8 text-center lg:text-left">
                Quick links
              </h3>
              <ul className="space-y-2">
                {quickLinks2.map((link) => (
                  <FooterLinkItem key={link} text={link} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif-4 text-[25px] leading-[37.5px] text-white mb-8 whitespace-nowrap text-center lg_text-left">
                EAB around the world
              </h3>
              <div className="w-full h-[200px] lg:h-[257px] rounded flex items-center justify-center text-white/40 text-sm">
                <img src={worldMap} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#07294c] py-8 lg:py-0 lg:h-[79px] flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] w-full">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {footerBarLinks.map((link, i) => (
              <div key={link} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="font-poppins text-[14px] font-semibold text-white/60">
                    |
                  </span>
                )}
                <a
                  href="#"
                  className="font-poppins text-[14px] font-semibold leading-[21px] text-white hover:text-white/80 transition-colors"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#102439] border-t border-white/10 py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] text-center">
          <p className="font-sans-3 text-[14px] lg:text-[16px] font-normal leading-[1.8] text-white/80 mx-auto mb-10">
            © 2017 – 2024 EAB International. The United World Colleges
            (International), Third Floor, 55 New Oxford Street, London, WC1A
            1BS, United Kingdom is a company registered in England and Wales and
            Limited by Guarantee, No. 908758. Registered Charity No. 313690.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-poppins text-[16px] font-semibold text-white">
              Website Design By
            </span>
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3314_858)">
                <path
                  d="M18.9774 21.3333V11.5512H23.9554V21.3333H25.8092V0H20.4875L13.9624 21.3333H18.9774Z"
                  fill="white"
                />
                <path d="M14.9778 0H6.854V25H7.68227L14.9778 0Z" fill="white" />
                <path
                  d="M0.0839844 3.36744V25H1.77638V2L0.0839844 3.36744Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3314_858">
                  <rect width="26" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
