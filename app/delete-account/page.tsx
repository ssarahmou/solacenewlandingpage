import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Delete Your Account & Data — Solace",
  description: "How to delete your Solace account and associated data, or remove specific data without closing your account.",
};

const adminEmailLink = (
  <a href="mailto:admin@solacelaunch.org" className="text-black underline hover:opacity-60 transition-opacity">
    admin@solacelaunch.org
  </a>
);

const sections = [
  {
    title: "Delete your entire account (recommended)",
    paragraphs: [
      "Deleting your account permanently removes your login and all personal data stored by Solace. This action cannot be undone.",
    ],
    subsections: [
      {
        title: "Steps to delete your account",
        listItems: [
          "Open the Solace app on your Android device.",
          "Sign in to the account you want to delete.",
          "Tap Settings (bottom navigation).",
          "Scroll to the bottom of Settings.",
          "Tap Delete Account.",
          "Read the warning carefully.",
          'Type "delete my account" in the confirmation field.',
          "Tap Delete my account permanently.",
          "You will be signed out automatically once deletion is complete.",
        ],
      },
      {
        title: "Processing time:",
        paragraphs: [
          "Account and associated data are deleted immediately upon successful confirmation. No additional waiting period is required.",
        ],
      },
      {
        title: "If you cannot access the app",
        paragraphs: [
          <>
            Email {adminEmailLink} from the email address linked to your Solace account with the subject line
            &quot;Account Deletion Request&quot;.
          </>,
          "Include your registered email address. We will verify your identity and process the request within 30 days.",
        ],
      },
    ],
  },
  {
    title: "What data is deleted when you delete your account",
    paragraphs: ["When you delete your Solace account, we permanently delete:"],
    listItems: [
      "Your account credentials and login information",
      "Profile information (name, language, preferences)",
      "AI chat and conversation history",
      "Journal entries and memories",
      "Mood and wellness analytics",
      "Calendar events",
      "Emergency contacts and favorite artists",
      "Encrypted persona and context data",
      "In-app preferences and streaks",
      "Subscription records stored in our database",
    ],
  },
  {
    title: "What data may be retained",
    subsections: [
      {
        title: "Google Play billing records",
        paragraphs: [
          "Managed by Google. Cancel active subscriptions in Google Play → Payments & subscriptions → Subscriptions before or after deleting your account to stop future charges.",
        ],
      },
      {
        title: "Payment / transaction records",
        paragraphs: [
          "Retained as required by tax and accounting laws (typically up to 7 years where applicable).",
        ],
      },
      {
        title: "Server and security logs",
        paragraphs: [
          "May be retained for up to 90 days for fraud prevention, debugging, and security, then automatically deleted or anonymized.",
        ],
      },
      {
        title: "Marketing waitlist emails",
        paragraphs: [
          "If a user separately signed up on the Solace website waitlist, that email list entry is independent of their app account and is not automatically removed. Users may contact us to remove it.",
        ],
      },
      {
        title: "Anonymized analytics",
        paragraphs: [
          "Aggregated, non-identifiable usage statistics that cannot be linked back to the user.",
        ],
      },
    ],
    trailingParagraphs: ["We do not sell personal data."],
  },
  {
    title: "Delete specific data without deleting your account",
    paragraphs: ["Users can remove individual data without closing their account."],
    subsections: [
      {
        title: "Delete conversation history",
        listItems: [
          "Open Solace.",
          "Go to Voice Chat.",
          "Open the chat menu.",
          "Tap Clear Chat and confirm.",
        ],
      },
      {
        title: "",
        paragraphs: ["This removes stored conversation history for the current AI persona."],
      },
      {
        title: "Delete a journal entry",
        listItems: [
          "Open Journal / Memories.",
          "Select the entry.",
          "Tap Delete.",
          "Confirm deletion.",
        ],
      },
      {
        title: "Delete a calendar event",
        listItems: [
          "Open Calendar.",
          "Select the event.",
          "Tap Delete.",
          "Confirm deletion.",
        ],
      },
      {
        title: "Update or remove profile information",
        listItems: [
          "Go to Settings.",
          "Edit or remove profile information, emergency contacts, favorite artists, or additional information.",
          "Save changes.",
        ],
      },
    ],
    trailingParagraphs: [
      <>
        To request deletion of data that cannot currently be removed in-app (for example mood analytics history),
        email: {adminEmailLink}
      </>,
    ],
  },
  {
    title: "Before you delete your account",
    listItems: [
      "Cancel your subscription in Google Play if you have an active Solace subscription to avoid future billing.",
      "Export anything you want to keep because deletion is permanent and cannot be reversed.",
      "If you only want to stop using Solace temporarily, you can log out instead of deleting your account.",
    ],
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Account & Data"
      lastUpdated="June 20, 2026"
      intro="Solace is published by Solace Launch. This page explains how to request deletion of your Solace account and associated personal data, and how to delete specific data without deleting your entire account."
      sections={sections}
    />
  );
}
