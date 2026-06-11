import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use & EULA — Solace",
  description: "Terms of Use and End User License Agreement for the Solace app.",
};

const sections = [
  {
    title: "1. Purpose & Important Disclaimers",
    paragraphs: [
      "Solace is designed as a wellness and self-reflection tool only. It is not a substitute for licensed therapy, medical care, or emergency services.",
      "Solace companions provide supportive conversation, journaling prompts, meditation guidance, and emotional check-ins for self-help and daily wellness purposes.",
      "AI-generated responses may not always be accurate, reliable, or appropriate. Do not rely on Solace for clinical decisions, medical guidance, or emergency support.",
      "If you are in crisis or need urgent help, please call your local emergency number or contact a qualified mental health professional immediately.",
    ],
  },
  {
    title: "2. Software License (EULA)",
    paragraphs: [
      "Subject to your compliance with these Terms, Solace grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App on Apple-branded devices that you own or control, solely for your personal, non-commercial purposes.",
      "This license does not allow you to:",
    ],
    listItems: [
      "Copy, modify, or create derivative works of the App or any content within it.",
      "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.",
      "Sell, resell, sublicense, rent, lease, or transfer your rights to the App.",
      "Remove or alter any proprietary notices, labels, or marks on the App.",
      "Use the App in any way that violates applicable law or these Terms.",
    ],
    trailingParagraphs: [
      "Solace reserves all rights not expressly granted to you under these Terms.",
    ],
  },
  {
    title: "3. Eligibility",
    paragraphs: [
      "You must be at least 13 years old (or the legal minimum age in your jurisdiction) to use Solace.",
      "If you are under 18, you must have parental or guardian consent to use the App.",
      "By creating an account, you confirm that all information provided is truthful and that you have the legal capacity to enter into these Terms.",
    ],
  },
  {
    title: "4. Accounts",
    paragraphs: [
      "You may create an account to access persistent memory, avatar customization, and journaling features.",
      "You are responsible for safeguarding your login credentials. Solace is not liable for loss of access due to unauthorized use of your account.",
      "Onboarding information (e.g., name, preferences) may be used to personalize your experience.",
    ],
  },
  {
    title: "5. Subscriptions & Billing",
    subsections: [
      {
        title: "Subscription Plans",
        paragraphs: [
          "Solace offers the following auto-renewable subscription plans:",
          "Prices are in USD and may vary by region based on App Store pricing tiers.",
        ],
        listItems: [
          "Monthly Plan: $12.99 per month (no free trial)",
          "Annual Plan: $89.99 per year ($7.49/month equivalent) — includes a 7-day free trial for new subscribers",
        ],
      },
      {
        title: "Free Trial",
        paragraphs: [
          "New subscribers on the Annual Plan receive a 7-day free trial. If you do not cancel before the trial period ends, you will be automatically charged $89.99 for the annual subscription.",
        ],
      },
      {
        title: "Auto-Renewal & Billing",
        paragraphs: [
          "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.",
          "Your Apple ID account will be charged upon confirmation of purchase and upon each renewal.",
          "You can manage or cancel your subscription at any time in: iPhone Settings → [Your Name] → Subscriptions.",
          "No refunds are provided for unused portions of a subscription period. Refund requests are handled by Apple in accordance with their standard refund policies.",
        ],
      },
      {
        title: "Price Changes",
        paragraphs: [
          "We may change subscription prices at any time. You will be notified of any price changes in advance and will have the opportunity to accept the new price or cancel before it takes effect.",
        ],
      },
      {
        title: "Other Purchases",
        paragraphs: [
          "Certain cosmetics, seasonal drops, or advanced features may require additional payment.",
          "Premium purchases are non-refundable except where legally required.",
        ],
      },
    ],
  },
  {
    title: "6. Features & In-App Content",
    subsections: [
      {
        title: "Avatars",
        paragraphs: [
          "Solace includes multiple avatars designed to represent different wellness styles and techniques, including relaxation, motivation, anxiety management, and mood uplift. Users may switch avatars at any time.",
        ],
      },
      {
        title: "Journaling & Seeds (In-App Currency)",
        paragraphs: [
          "Journaling, meditation, and check-ins may generate Seeds, Solace's in-app currency. Seeds can be redeemed for cosmetic items such as avatar clothing, accessories, and community badges.",
          "Seeds have no monetary value outside the platform and cannot be exchanged for real-world currency.",
          "Solace reserves the right to modify, expire, or discontinue Seeds at any time.",
        ],
      },
    ],
  },
  {
    title: "7. User Conduct & Community Rules",
    paragraphs: ["When using Solace, you agree to:"],
    listItems: [
      "Treat other users respectfully and refrain from harassment, discrimination, or harmful content.",
      "Not attempt to exploit or manipulate the Seeds economy, avatars, or any system via spam, bots, or hacking.",
      "Not attempt to gain unauthorized access to any part of the App or its servers.",
    ],
    trailingParagraphs: [
      "Violations may result in content removal, suspension, or permanent account termination at our discretion.",
    ],
  },
  {
    title: "8. AI Content & Consent",
    paragraphs: [
      "Solace responses are AI-generated and may not always be accurate or appropriate. Use them for wellness exploration only.",
      "By continuing to use the App, you consent to AI-generated responses being stored, analyzed, and used to improve the Service.",
      "Do not share sensitive personal, medical, or financial information with Solace AI companions.",
    ],
  },
  {
    title: "9. Privacy & Data",
    paragraphs: [
      <>
        Your use of the App is subject to our{" "}
        <a
          href="https://solacelaunch.com/privacy-policy"
          className="text-black underline hover:opacity-60 transition-opacity"
        >
          Privacy Policy
        </a>
        . By using the App, you consent to the data practices described therein, including:
      </>,
    ],
    listItems: [
      "AES-256-CBC encryption of sensitive data (chats, profiles, journal entries).",
      "Secure storage in Supabase with Row-Level Security ensuring no unauthorized cross-user data access.",
      "Use of your data for personalization, memory, and feature development.",
    ],
  },
  {
    title: "10. Intellectual Property",
    paragraphs: [
      "All Solace avatars, artwork, Seeds economy design, branding, and underlying technology are the property of Solace Launch Pte. Ltd. You may not copy, sell, or distribute Solace assets without express written permission.",
    ],
  },
  {
    title: "11. Third-Party Services",
    paragraphs: [
      "The App may integrate with or link to third-party services (including Apple's App Store, RevenueCat, and Supabase). Your use of such services is subject to their respective terms and privacy policies. Solace is not responsible for the practices of any third-party service.",
    ],
  },
  {
    title: "12. Termination",
    paragraphs: ["We reserve the right to suspend or terminate your account and access to the App if:"],
    listItems: [
      "You violate these Terms.",
      "You abuse, exploit, or manipulate the App or its systems.",
      "Your behavior poses safety risks to yourself or others in the community.",
    ],
    trailingParagraphs: ["Upon termination, your license to use the App immediately ceases."],
  },
  {
    title: "13. Disclaimer of Warranties",
    paragraphs: [
      'The App is provided "as is" and "as available" without warranties of any kind, either express or implied. Solace does not warrant that the App will be uninterrupted, error-free, secure, or free of harmful components.',
    ],
  },
  {
    title: "14. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Solace shall not be liable for any indirect, incidental, special, punitive, or consequential damages arising from your use of or inability to use the App, including but not limited to reliance on AI-generated content, data loss, or missed opportunities. Use of Solace is at your own risk.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of our services after changes become effective constitutes acceptance of the revised Terms. If you do not agree to the updated Terms, you should stop using our services.",
    ],
  },
  {
    title: "16. Governing Law",
    paragraphs: [
      "Governing Law and Jurisdiction. These Terms are governed by the laws of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles, except where applicable local law requires otherwise. Any dispute arising out of or relating to these Terms or the Services will be resolved in the courts of British Columbia, except that this does not limit any rights you may have under mandatory consumer protection laws in your jurisdiction.",
    ],
  },
  {
    title: "17. Contact Us",
    paragraphs: [
      <>
        For questions about these Terms, please contact us at:{" "}
        <a href="mailto:admin@solacelaunch.org" className="text-black underline hover:opacity-60 transition-opacity">
          admin@solacelaunch.org
        </a>
      </>,
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use & End User License Agreement"
      lastUpdated="June 11, 2026"
      intro={[
        'Welcome to Solace — an AI-powered emotional wellness companion combining personalized avatars, journaling, streak-based engagement, and a supportive community. By downloading or using the Solace app (the "App" or "Service"), you agree to these Terms of Use and End User License Agreement ("Terms"). If you do not agree, please discontinue use immediately.',
        'These Terms constitute a legal agreement between you and Solace Launch Pte. Ltd. ("Solace," "we," "us," or "our") and govern your access to and use of the App.',
      ]}
      sections={sections}
      outro="By using the Solace app, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and End User License Agreement."
    />
  );
}
