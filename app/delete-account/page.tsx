import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Delete Account — Solace",
  description: "How to delete your Solace account and associated data.",
};

const sections = [
  {
    title: "1. Requesting Account Deletion",
    subsections: [
      {
        title: "Option 1: In-App",
        listItems: [
          "Open the Solace app.",
          "Navigate to Settings.",
          "Select Delete Account.",
          "Confirm your request.",
        ],
      },
      {
        title: "Option 2: Email Request",
        paragraphs: [
          <>
            Email{" "}
            <a
              href="mailto:support@solacelaunch.com"
              className="text-black underline hover:opacity-60 transition-opacity"
            >
              support@solacelaunch.com
            </a>{" "}
            with the subject line &quot;Delete Account Request&quot; and include the email address associated with
            your Solace account.
          </>,
        ],
      },
    ],
  },
  {
    title: "2. Data That Will Be Deleted",
    listItems: [
      "Account information",
      "Profile information",
      "Conversation history",
      "Journal entries",
      "User-generated content associated with your account",
    ],
  },
  {
    title: "3. Data That May Be Retained",
    listItems: [
      "Information required to comply with legal obligations",
      "Security, fraud prevention, and dispute resolution records",
    ],
  },
  {
    title: "4. Retention Period",
    paragraphs: [
      "Most account data is permanently deleted within 30 days after the deletion request has been processed.",
    ],
  },
  {
    title: "5. Developer Information",
    paragraphs: ["Solace Launch Pte. Ltd."],
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Account"
      lastUpdated="June 20, 2026"
      intro={[
        "Delete Your Solace Account",
        "If you would like to delete your Solace account and associated data, please follow the steps below.",
      ]}
      sections={sections}
    />
  );
}
