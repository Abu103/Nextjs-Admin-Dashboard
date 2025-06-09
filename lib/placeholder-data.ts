// lib/placeholder-data.ts

import { Payment } from "./types";

// THE FIX IS HERE: We explicitly tell TypeScript this is an array of Payment objects.
// This preserves the strict type for the 'status' property.
export const payments: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "f62e4b81", amount: 75, status: "success", email: "test@test.com" },
  { id: "a1b2c3d4", amount: 200, status: "failed", email: "user@domain.com" },
  { id: "b5e6f7g8", amount: 150, status: "success", email: "another@example.com" },
  { id: "h9i0j1k2", amount: 50, status: "pending", email: "user2@domain.com" },
];