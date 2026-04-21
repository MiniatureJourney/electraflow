export type UserProfile = {
  id: string;
  name: string;
  email: string;
  age: number;
  state: string;
  constituency: string;
  isFirstTimeVoter: boolean;
  needsAccessibility: boolean;
  preferredLanguage: string;
  learningScore: number;
  completedSteps: string[];
};

// Mock Auth
export const MOCK_USER: UserProfile = {
  id: "user_123",
  name: "Aditya Sharma",
  email: "aditya@example.com",
  age: 22,
  state: "Maharashtra",
  constituency: "Mumbai South",
  isFirstTimeVoter: true,
  needsAccessibility: false,
  preferredLanguage: "en",
  learningScore: 35,
  completedSteps: ["step_1", "step_2"]
};

export type ElectionStep = {
  id: string;
  title: string;
  description: string;
  phase: number;
  status: "completed" | "current" | "upcoming";
  category: "pre-election" | "voting" | "post-election";
};

export type ElectionRule = {
  id: string;
  category: "myth" | "fact" | "rule" | "warning";
  title: string;
  description: string;
  tags: string[];
};

export const MOCK_STEPS: ElectionStep[] = [
  { id: "step_1", title: "Model Code of Conduct", description: "The ECI announces election dates. The MCC comes into effect immediately, restricting government announcements.", phase: 1, status: "completed", category: "pre-election" },
  { id: "step_2", title: "Voter List Publication", description: "The final electoral roll is published. Citizens can verify their names on the voter list.", phase: 2, status: "completed", category: "pre-election" },
  { id: "step_3", title: "Nomination Filing", description: "Candidates file their nomination papers, declaring assets, criminal records, and educational qualifications.", phase: 3, status: "current", category: "pre-election" },
  { id: "step_4", title: "Campaigning", description: "Political parties campaign. Ends 48 hours before polling starts (Silence Period).", phase: 4, status: "upcoming", category: "pre-election" },
  { id: "step_5", title: "Polling Day", description: "Voters go to the booth, verify identity, and cast their vote using the EVM & VVPAT.", phase: 5, status: "upcoming", category: "voting" },
  { id: "step_6", title: "Counting of Votes", description: "EVMs are opened in the presence of candidates, and votes are counted.", phase: 6, status: "upcoming", category: "post-election" },
  { id: "step_7", title: "Declaration of Results", description: "The Election Commission officially declares the winning candidate for the constituency.", phase: 7, status: "upcoming", category: "post-election" },
];

export const MOCK_RULES: ElectionRule[] = [
  { id: "r1", category: "fact", title: "Right to Vote (NOTA)", description: "If you don't like any candidate, you can press the NOTA (None of the Above) button.", tags: ["voting", "evm"] },
  { id: "r2", category: "rule", title: "48-Hour Silence Period", description: "No public campaigning, loud speakers, or rallies are allowed 48 hours before the polling day.", tags: ["campaign", "mcc"] },
  { id: "r3", category: "myth", title: "Voter Slip is Enough", description: "Myth: Voter slip is enough to vote. Fact: You MUST carry an approved ID (EPIC/Aadhar/PAN) along with the slip.", tags: ["polling_day", "id"] },
  { id: "r4", category: "warning", title: "Bribery & Gifts", description: "Accepting money, liquor, or gifts in exchange for votes is a criminal offence.", tags: ["mcc", "legal"] },
  { id: "r5", category: "fact", title: "VVPAT Verification", description: "After pressing the button, the VVPAT machine displays a printed slip for 7 seconds to verify your vote.", tags: ["voting", "evm"] },
];
