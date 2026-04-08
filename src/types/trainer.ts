export interface Trainer {
  id: string;
  name: string;
  gym: string; // 'alpha' | 'beta'
  speciality: string;
  cert: string;
  years: number;
  featured: boolean;
  image?: string;
}
