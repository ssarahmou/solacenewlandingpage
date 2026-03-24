"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const arrowSrc = "/grommet-icons_link-next.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "invalid" | "duplicate" | "error">("idle");

  async function handleSubmit() {
    if (!email) {
      setStatus("invalid");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("invalid");
      return;
    }
    if (!supabase) {
      console.error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local and restart the dev server.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    const { error } = await supabase.from("emails").insert({ email });
    if (error) {
      if (error.code === "23505") {
        setStatus("duplicate");
      } else {
        console.error("Supabase insert error:", error.message, error.code);
        setStatus("error");
      }
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <footer className="relative bg-white pt-16 pb-0 px-8 overflow-hidden">
      {/* Background plant/robot image — desktop only, absolute */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[550px] pointer-events-none">
        <img src="/solacebottom.png" alt="" className="w-full h-full object-contain object-bottom" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_auto_1.4fr] gap-8 md:gap-16 relative z-10">
        {/* Spacer for the image area — desktop only */}
        <div className="hidden md:block" />
        {/* Socials */}
        <div className="flex flex-col gap-3">
          <p
            className="font-normal mb-3"
            style={{ fontSize: "14px", letterSpacing: "-0.14px", color: "rgba(0,0,0,0.5)" }}
          >
            Socials
          </p>
          {[
            { label: "X/Twitter", href: "https://x.com/solacelaunch" },
            { label: "Instagram", href: "https://instagram.com/solacelaunch" },
            { label: "Linkedin", href: "https://www.linkedin.com/company/solacelaunch/posts/?feedView=all" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-black hover:opacity-60 transition-opacity"
              style={{ fontSize: "14px", letterSpacing: "-0.14px" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center: company links */}
        <div className="flex flex-col gap-3">
          <p
            className="font-normal mb-3"
            style={{ fontSize: "14px", letterSpacing: "-0.14px", color: "rgba(0,0,0,0.5)" }}
          >
            Solace Launch @ 2025
          </p>
          <a
            href="mailto:kellyzeng@solacelaunch.org"
            className="font-normal text-black hover:opacity-60 transition-opacity"
            style={{ fontSize: "14px", letterSpacing: "-0.14px" }}
          >
            Contact
          </a>
          <a
            href="#"
            className="font-normal text-black hover:opacity-60 transition-opacity"
            style={{ fontSize: "14px", letterSpacing: "-0.14px" }}
          >
            Privacy Policy
          </a>
        </div>

        {/* Right: email signup */}
        <div className="flex flex-col gap-4">
          <h3
            className="font-normal text-black leading-[1.07]"
            style={{ fontSize: "30px", letterSpacing: "-0.4px", maxWidth: "224px" }}
          >
            Never miss out on an update.
          </h3>
          <div
            className="flex items-center justify-between border-b py-4"
            style={{ borderColor: "#b7b7b7", borderBottomWidth: "1.2px" }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-transparent font-normal focus:outline-none"
              style={{ fontSize: "16px", letterSpacing: "-0.17px", color: "rgba(0,0,0,0.5)" }}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="flex items-center justify-center rounded-[5px] p-3 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#222" }}
            >
              <img src={arrowSrc} alt="→" className="w-[19px] h-[19px]" />
            </button>
          </div>
          <p
            className="font-normal h-[20px] transition-all duration-300"
            style={{
              fontSize: "13px",
              opacity: status === "idle" || status === "loading" ? 0 : 1,
              transform: status === "idle" || status === "loading" ? "translateY(-4px)" : "translateY(0)",
            }}
          >
            {status === "success" && <span className="text-green-600">Thanks! You&apos;re on the list.</span>}
            {status === "invalid" && <span className="text-red-500">Please enter a valid email address.</span>}
            {status === "duplicate" && <span className="text-amber-600">This email is already subscribed.</span>}
            {status === "error" && <span className="text-red-500">Something went wrong. Try again.</span>}
          </p>
        </div>
      </div>

      {/* Mobile sprout image — below content, not overlapping */}
      <div className="md:hidden flex justify-center mt-8">
        <img src="/solacebottom.png" alt="" className="w-[300px] h-auto" />
      </div>
    </footer>
  );
}
