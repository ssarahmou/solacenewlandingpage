"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a Solace?",
    a: "Solace is an emotionally intelligent AI companion in a physical device. It combines advanced AI conversation with embodied presence to support your mental wellness every day.",
  },
  {
    q: "How does Seed AI work?",
    a: "Seed uses a proprietary OASIS emotion-recognition chip alongside large language models to understand your mood, remember your history, and respond in the most helpful way possible.",
  },
  {
    q: "Lorem ipsum dolor sit amet?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 text-sm">
            Have more questions? Contact Solace.
          </p>
          <button className="self-start bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Contact us
          </button>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-center justify-between text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                <span className="text-gray-400 flex-shrink-0 text-lg">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
