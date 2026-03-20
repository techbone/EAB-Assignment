import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function StickySearch() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden lg:block">
      <div className="bg-[#004a97] h-[70px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[140px] h-full flex items-center justify-between">
          <div className="font-poppins text-[16px] lg:text-[19px] font-bold leading-[26.6px] text-white flex-1/3">
            How can we help you?
          </div>
          <div className="flex gap-3 flex-2/3">
            <select
              defaultValue="default"
              className="bg-white text-black py-2 px-6 flex-1/3"
            >
              <option value="default">I'm a student</option>
            </select>
            <select
              defaultValue="default"
              className="bg-white text-black py-2 px-6 flex-2/3"
            >
              <option value="default">
                I want to find out about applications
              </option>
            </select>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="ml-4 text-white hover:text-white/70 transition-colors"
            aria-label="Dismiss"
          >
            <FiX size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
