"use client";

import { Agentation } from "agentation";

export default function DevTools() {
  return (
    <Agentation
      endpoint="http://localhost:4747"
      onSessionCreated={(sessionId) => {
        console.log("Session started:", sessionId);
      }}
    />
  );
}
