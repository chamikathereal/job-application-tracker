// client/types/index.ts
export interface JobApplication {
  id: number;
  company: string;
  position: string;
  status: "Applied" | "Interviewing" | "Rejected" | "Offer";
  dateApplied: string;
  notes?: string;
}