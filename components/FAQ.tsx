"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What is Solace Seed?",
    a: "Solace Seed is a pocket-sized AI companion designed to support your emotional wellbeing in real time. It combines on-device sensing (voice, tone, interaction patterns) with an intelligent agent that understands context—not just words—to provide grounded, private, and personalized support throughout your day.",
  },
  {
    q: "How is Solace different from ChatGPT or other AI apps?",
    a: "Most AI tools respond to what you say. Solace is built to understand how you feel.\n\nSolace Seed integrates persistent memory of your emotional patterns (not just chat history), context-aware responses that evolve with you over time, and hardware-level interaction (touch, presence, ambient listening). This allows Solace to act less like a chatbot—and more like a companion that grows with you.",
  },
  {
    q: "Is my data private?",
    a: "Yes—privacy is a core part of Solace. Sensitive interactions are processed with privacy-first architecture, we minimize cloud dependency wherever possible, and you have full control over what is stored, remembered, or deleted. Our goal is to build emotionally intelligent AI without compromising user trust.",
  },
  {
    q: "What can I actually use Solace Seed for?",
    a: "Solace Seed is designed for everyday emotional support—processing thoughts during stressful or overwhelming moments, reflecting on relationships, decisions, and personal growth, staying grounded through check-ins and gentle prompts, and building long-term self-awareness through patterns over time. It's not therapy—but it's a consistent, always-available layer of support when you need it most.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-10 md:py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <FadeIn direction="right">
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
        </FadeIn>

        {/* Right: accordion */}
        <FadeIn delay={150} direction="left">
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="py-[35px]"
              style={{
                borderTop: "1.1px solid rgba(0,0,0,0.39)",
                transition: "border-color 0.4s ease",
              }}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-normal text-black"
                  style={{ fontSize: "19px" }}
                >
                  {faq.q}
                </span>
                {/* Single SVG — vertical line rotates away when open */}
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "27px", height: "27px" }}
                >
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                    {/* Horizontal line — always visible */}
                    <line
                      x1="7" y1="13.5" x2="20" y2="13.5"
                      stroke="black" strokeWidth="1.5"
                      style={{ transition: "opacity 0.35s ease" }}
                    />
                    {/* Vertical line — rotates + fades when open */}
                    <line
                      x1="13.5" y1="7" x2="13.5" y2="20"
                      stroke="black" strokeWidth="1.5"
                      style={{
                        transformOrigin: "13.5px 13.5px",
                        transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                        opacity: open === i ? 0 : 1,
                        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                      }}
                    />
                  </svg>
                </span>
              </button>

              {/* Smooth height expand via grid trick */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    className="font-normal leading-[1.79]"
                    style={{
                      fontSize: "17px",
                      color: "rgba(0,0,0,0.5)",
                      paddingTop: "16px",
                      opacity: open === i ? 1 : 0,
                      transform: open === i ? "translateY(0)" : "translateY(-6px)",
                      transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
