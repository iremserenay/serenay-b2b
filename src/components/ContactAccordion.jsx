import React, { useState } from "react";
import { BsTelephone, BsTelephoneInbound } from "react-icons/bs";

const ContactAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      {" "}
      <div className="py-4">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span
            className={`text-customBlue font-bold text-lg ${
              accordionOpen ? "mb-3" : undefined
            }`}
          >
            İletişim
          </span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex items-center gap-3 mt-3">
              <BsTelephone size={18} className="text-customLightBlue" />
              <a
                href="/"
                className="underline text-customBlue hover:text-customLightBlue transition-all"
              >
                444 50 40
              </a>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-3 text-customLightBlue text-lg hover:text-white border-2 border-customLightBlue hover:bg-customLightBlue px-5 py-3 mt-3 transition-all"
            >
              <BsTelephoneInbound size={19} />
              <span className="font-bold">Whatsapp Destek Hattı</span>
            </a>
            <p className="text-[11px] my-4">
              Haftanın her günü 7:30 - 22:00 saatleri arasında bize
              ulaşabilirsiniz.
            </p>
            <a
              href="/"
              className="text-customBlue hover:text-customLightBlue transition-all"
            >
              İletişim Formu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAccordion;
