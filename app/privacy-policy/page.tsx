import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Solace",
  description: "How Solace Launch collects, uses, stores, and shares your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    subsections: [
      {
        title: "1.1 Information You Provide",
        listItems: [
          "Account information: name, email address, date of birth, and password.",
          "Onboarding preferences: interests, favorite music/artists, and wellness goals used to personalize your experience.",
          "Journal entries and responses to check-ins or prompts within the App.",
          "Payment information: processed securely through Apple's in-app purchase system and RevenueCat. Solace does not store your payment card details.",
          "Community content: posts, messages, or other content you share within the App.",
        ],
      },
      {
        title: "1.2 Information Collected Automatically",
        listItems: [
          "Device information: device type, operating system, and app version.",
          "Usage data: features used, session duration, interaction patterns, and streak activity.",
          "Conversation data: your interactions with Solace AI companions, stored to enable memory and personalization.",
          "Crash reports and performance diagnostics.",
        ],
      },
      {
        title: "1.3 Information from Third Parties",
        listItems: [
          "Apple Sign-In: if you use Apple Sign-In, we receive your name and email (subject to your Apple privacy settings).",
          "RevenueCat: subscription status and transaction metadata (no payment card data).",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: ["We use your information to:"],
    listItems: [
      "Provide, operate, and improve the App and its features.",
      "Personalize your Solace experience, including avatar responses and journaling prompts.",
      "Enable persistent memory so your AI companion can remember context across sessions.",
      "Process subscription payments and manage your account.",
      "Send you important notifications, updates, and support communications.",
      "Monitor safety and moderate community content to protect users.",
      "Analyze usage trends to develop new features and improve the App.",
      "Comply with legal obligations.",
    ],
  },
  {
    title: "3. Data Storage & Security",
    paragraphs: [
      "All sensitive data — including chats, journal entries, and profile information — is encrypted using AES-256-CBC encryption.",
      "Data is stored securely in Supabase with Row-Level Security (RLS) to prevent unauthorized cross-user data access.",
      "We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.",
      "Journal entries and community posts may be displayed anonymously or attributed to your avatar name, not your real name.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    paragraphs: [
      "We do not sell your personal information. We may share your data only in the following circumstances:",
    ],
    listItems: [
      "Service providers: trusted third parties who assist in operating the App (e.g., Supabase for data storage, RevenueCat for subscription management). These providers are contractually obligated to protect your data.",
      "Legal requirements: if required by law, court order, or to protect the safety of our users or the public.",
      "Business transfers: in the event of a merger, acquisition, or sale of assets, your data may be transferred.",
      "With your consent: in any other circumstances, only with your explicit permission.",
    ],
  },
  {
    title: "5. AI & Conversation Data",
    paragraphs: [
      "Conversations with Solace AI companions are stored to enable persistent memory and improve personalization. By using the App, you consent to:",
    ],
    listItems: [
      "Your conversation data being stored and processed to maintain context across sessions.",
      "Anonymized conversation patterns being analyzed to improve AI quality and safety.",
    ],
    trailingParagraphs: [
      "We recommend you do not share sensitive personal, medical, financial, or identifying information with AI companions beyond what is needed for your wellness experience.",
    ],
  },
  {
    title: "6. Children's Privacy",
    paragraphs: [
      "Solace is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will delete it promptly.",
      "Users aged 13–17 must have parental or guardian consent to use the App.",
    ],
  },
  {
    title: "7. Your Rights & Choices",
    paragraphs: ["Depending on your jurisdiction, you may have the right to:"],
    listItems: [
      "Access the personal information we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      'Request deletion of your personal data ("right to be forgotten").',
      "Object to or restrict certain processing of your data.",
      "Data portability — receive a copy of your data in a machine-readable format.",
      "Withdraw consent at any time, where processing is based on consent.",
    ],
    trailingParagraphs: [
      <>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:admin@solacelaunch.org" className="text-black underline hover:opacity-60 transition-opacity">
          admin@solacelaunch.org
        </a>
        . We will respond within 30 days.
      </>,
    ],
    subsections: [
      {
        title: "California Residents (CCPA)",
        paragraphs: [
          "California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete it, and the right to opt out of the sale of personal information. We do not sell personal information.",
        ],
      },
      {
        title: "European Residents (GDPR)",
        paragraphs: [
          "If you are located in the European Economic Area (EEA), we process your data under the legal bases of contractual necessity, legitimate interests, and/or your consent. You have the right to lodge a complaint with your local data protection authority.",
        ],
      },
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymize your personal data within 30 days, unless retention is required by law.",
    ],
  },
  {
    title: "9. Third-Party Services & Links",
    paragraphs: [
      "The App may contain links to or integrate with third-party services. This Privacy Policy does not apply to those services. We encourage you to review the privacy policies of any third-party services you use.",
      "Key third-party services used:",
    ],
    listItems: [
      "Apple App Store — manages payments, subscriptions, and app distribution.",
      "RevenueCat — manages subscription status and entitlement tracking.",
      "Supabase — provides secure database and backend infrastructure.",
    ],
  },
  {
    title: "10. Push Notifications",
    paragraphs: [
      "With your permission, we may send push notifications for wellness reminders, streak alerts, and App updates. You can disable push notifications at any time in your device Settings.",
    ],
  },
  {
    title: "11. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. We will notify you of material changes through the App or via email at least 30 days before the change takes effect. Continued use of the App after changes constitutes acceptance of the updated Policy.",
    ],
  },
  {
    title: "12. Governing Law",
    paragraphs: [
      "This Privacy Policy is governed by the laws of Singapore, subject to applicable local data protection laws in your jurisdiction.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "For questions, data requests, or concerns about this Privacy Policy, please contact:",
      "Solace Launch Pte. Ltd.",
      <>
        Email:{" "}
        <a href="mailto:admin@solacelaunch.org" className="text-black underline hover:opacity-60 transition-opacity">
          admin@solacelaunch.org
        </a>
      </>,
      <>
        Website:{" "}
        <a
          href="https://solacelaunch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline hover:opacity-60 transition-opacity"
        >
          solacelaunch.com
        </a>
      </>,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="June 11, 2026"
      intro={[
        'This Privacy Policy explains how Solace Launch Pte. Ltd. ("Solace," "we," "us," or "our") collects, uses, stores, and shares your personal information when you use the Solace mobile application ("App"). We are committed to protecting your privacy and handling your data responsibly.',
        "By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.",
      ]}
      sections={sections}
      outro="By using the Solace app, you acknowledge that you have read and understood this Privacy Policy."
    />
  );
}
