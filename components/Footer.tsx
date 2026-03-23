const arrowSrc = "https://www.figma.com/api/mcp/asset/0f65faf7-54ba-4e12-b0d4-6de369a69384";
const robotImageSrc = "https://www.figma.com/api/mcp/asset/3567d365-c8a5-4ee1-8df5-23d58d560fe3";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-10 px-8 overflow-hidden">
      {/* Background plant/robot image (bottom left) */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[550px] pointer-events-none">
        <img src="/solacebottom.png" alt="" className="w-full h-full object-contain object-bottom" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_auto_1.4fr] gap-16 relative z-10">
        {/* Spacer for the image area */}
        <div />
        {/* Socials */}
        <div className="flex flex-col gap-3">
          <p
            className="font-normal mb-3"
            style={{ fontSize: "14px", letterSpacing: "-0.14px", color: "rgba(0,0,0,0.5)" }}
          >
            Socials
          </p>
          {["X/Twitter", "Instagram", "Linkedin"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-normal text-black hover:opacity-60 transition-opacity"
              style={{ fontSize: "14px", letterSpacing: "-0.14px" }}
            >
              {link}
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
          {["Contact", "Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-normal text-black hover:opacity-60 transition-opacity"
              style={{ fontSize: "14px", letterSpacing: "-0.14px" }}
            >
              {link}
            </a>
          ))}
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
              className="flex-1 bg-transparent font-normal focus:outline-none"
              style={{ fontSize: "16px", letterSpacing: "-0.17px", color: "rgba(0,0,0,0.5)" }}
            />
            <button
              className="flex items-center justify-center rounded-[5px] p-3 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#222" }}
            >
              <img src={arrowSrc} alt="→" className="w-[19px] h-[19px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
