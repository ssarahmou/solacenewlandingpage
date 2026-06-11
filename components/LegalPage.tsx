import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalSubsection = {
  title: string;
  paragraphs?: ReactNode[];
  listItems?: string[];
};

type LegalSection = {
  title: string;
  paragraphs?: ReactNode[];
  listItems?: string[];
  trailingParagraphs?: ReactNode[];
  subsections?: LegalSubsection[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  intro: ReactNode | ReactNode[];
  sections: LegalSection[];
  outro?: ReactNode;
};

const bodyStyle = {
  fontSize: "14px",
  letterSpacing: "-0.14px",
  lineHeight: "1.65",
  color: "rgba(0,0,0,0.75)",
} as const;

function LegalBody({ paragraphs, listItems, trailingParagraphs, subsections }: Omit<LegalSection, "title">) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="font-normal" style={bodyStyle}>
          {paragraph}
        </p>
      ))}
      {listItems && listItems.length > 0 && (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          {listItems.map((item) => (
            <li key={item} className="font-normal" style={bodyStyle}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {trailingParagraphs?.map((paragraph, index) => (
        <p key={index} className="font-normal" style={bodyStyle}>
          {paragraph}
        </p>
      ))}
      {subsections?.map((subsection) => (
        <div key={subsection.title || "subsection"} className="flex flex-col gap-3 mt-1">
          {subsection.title ? (
            <h3
              className="font-normal text-black"
              style={{ fontSize: "16px", letterSpacing: "-0.32px", lineHeight: "1.4" }}
            >
              {subsection.title}
            </h3>
          ) : null}
          {subsection.paragraphs?.map((paragraph, index) => (
            <p key={index} className="font-normal" style={bodyStyle}>
              {paragraph}
            </p>
          ))}
          {subsection.listItems && subsection.listItems.length > 0 && (
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {subsection.listItems.map((item) => (
                <li key={item} className="font-normal" style={bodyStyle}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LegalPage({ title, lastUpdated, intro, sections, outro }: LegalPageProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="light" />

      <section className="bg-white px-8 pt-[140px] pb-24 md:pt-[220px]">
        <div className="max-w-3xl mx-auto">
          <p
            className="font-normal mb-4"
            style={{ fontSize: "14px", letterSpacing: "-0.14px", color: "rgba(0,0,0,0.5)" }}
          >
            Last updated: {lastUpdated}
          </p>
          <h1
            className="font-normal text-black mb-6"
            style={{ fontSize: "44px", letterSpacing: "-1.5px", lineHeight: "1.05" }}
          >
            {title}
          </h1>
          <div className="flex flex-col gap-4 mb-12">
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-normal text-black"
                style={{ fontSize: "15px", letterSpacing: "-0.15px", lineHeight: "1.6", color: "rgba(0,0,0,0.75)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="font-normal text-black mb-4"
                  style={{ fontSize: "20px", letterSpacing: "-0.4px", lineHeight: "1.3" }}
                >
                  {section.title}
                </h2>
                <LegalBody
                  paragraphs={section.paragraphs}
                  listItems={section.listItems}
                  trailingParagraphs={section.trailingParagraphs}
                  subsections={section.subsections}
                />
              </div>
            ))}
          </div>

          {outro && (
            <p className="font-normal mt-12" style={bodyStyle}>
              {outro}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
