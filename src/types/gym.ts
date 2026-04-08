export interface Feature {
  id: string;
  name: string;
}

export interface Plan {
  id: string;
  name: string;
  monthly: number;
  yearly: number;
  popular?: boolean;
  features: string[];
}

export interface Gym {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  features: string[];
  plans: Plan[];
  image?: string;
}
