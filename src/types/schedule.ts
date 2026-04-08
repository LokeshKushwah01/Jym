export type ClassType = "strength" | "hiit" | "yoga" | "crossfit" | "cardio";

export interface ClassSlot {
  gym: string; // 'alpha' | 'beta'
  day: string; // 'Mon' | 'Tue' etc.
  time: string;
  name: string;
  trainer: string; // trainer id
  duration: number; // in minutes
  type: ClassType;
}
