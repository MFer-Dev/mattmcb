export const sections = [
  { id: "snapshot", question: "The short version." },
  { id: "focus", question: "The mandate." },
  { id: "method", question: "How I work." },
  { id: "impact", question: "The track record." },
  { id: "credentials", question: "The foundation." },
  { id: "contact", question: "Let’s talk." },
] as const;

export type SectionId = (typeof sections)[number]["id"];
