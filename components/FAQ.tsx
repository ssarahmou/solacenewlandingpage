"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Solace?",
    a: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
  },
  {
    q: "How does Andros fit?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "Lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    q: "Lorem ipsum dolor sit amet,",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <h2
            className="font-normal text-black leading-[1.08]"
            style={{ fontSize: "44px", letterSpacing: "-2px", maxWidth: "347px" }}
          >
            Frequently asked questions
          </h2>
          <p
            className="font-normal leading-[normal]"
            style={{ fontSize: "17px", letterSpacing: "-0.36px", color: "rgba(0,0,0,0.5)", maxWidth: "258px" }}
          >
            Have more questions?{" "}
            <br />
            Connect with our team.
          </p>
          <button
            className="self-start text-white font-normal rounded-[8px] hover:opacity-90 transition-opacity flex items-center justify-center"
            style={{
              backgroundColor: "#313131",
              fontSize: "15px",
              letterSpacing: "-0.42px",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "46px",
            }}
          >
            Contact us
          </button>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="py-[35px]"
              style={{ borderTop: "1.1px solid rgba(0,0,0,0.39)" }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-normal text-black"
                  style={{ fontSize: "19px" }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "27px", height: "27px" }}
                >
                  {open === i ? (
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                      <line x1="7" y1="13.5" x2="20" y2="13.5" stroke="black" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                      <line x1="13.5" y1="7" x2="13.5" y2="20" stroke="black" strokeWidth="1.5" />
                      <line x1="7" y1="13.5" x2="20" y2="13.5" stroke="black" strokeWidth="1.5" />
                    </svg>
                  )}
                </span>
              </button>
              {open === i && (
                <p
                  className="mt-4 font-normal leading-[1.79]"
                  style={{ fontSize: "17px", color: "rgba(0,0,0,0.5)" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
