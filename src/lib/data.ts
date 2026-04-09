import { Gym } from "@/types/gym";
import { Trainer } from "@/types/trainer";
import { ClassSlot } from "@/types/schedule";
import { GalleryImage } from "@/types/gallery";

export const gyms: Gym[] = [
  {
    id: "alpha",
    name: "JY Gymnasium",
    address: "Sagartal Rd, Bahodapur, Anand Nagar",
    city: "Gwalior, MP 474010",
    phone: "089822 80027",
    email: "alpha@jygym.com",
    whatsapp: "918982280027",
    hours: { weekday: "Open 24 Hours", weekend: "Open 24 Hours" },
    features: ["Olympic Lifting Zone", "25m Swimming Pool", "Finnish Sauna", "Personal Training", "Parking", "Towel Service"],
    plans: [
      { id: "basic", name: "Basic", monthly: 999, yearly: 9990, features: ["Gym access", "Locker room", "2 classes/week", "App"] },
      { id: "pro", name: "Pro", monthly: 1799, yearly: 17990, popular: true, features: ["Everything in Basic", "Unlimited classes", "Pool & Sauna", "1 PT/month", "Nutrition guide"] },
      { id: "elite", name: "Elite", monthly: 2999, yearly: 29990, features: ["Everything in Pro", "Unlimited PT", "Priority booking", "2 guest passes", "Quarterly assessment", "Kit bag"] }
    ],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "beta",
    name: "JY Gymnasium 2.0",
    address: "Asian Highway 47, 2, Bahodapur",
    city: "Gwalior, MP 474012",
    phone: "089822 80027",
    email: "beta@jygym.com",
    whatsapp: "918982280027",
    hours: { weekday: "5:00 AM – 11:00 PM", weekend: "7:00 AM – 9:00 PM" },
    features: ["CrossFit Arena", "Yoga Studio", "Rooftop Track", "Nutrition Bar", "Steam Room", "Certified Coaches"],
    plans: [
      { id: "basic", name: "Basic", monthly: 899, yearly: 8990, features: ["Gym access", "Locker room", "2 classes/week", "App"] },
      { id: "pro", name: "Pro", monthly: 1599, yearly: 15990, popular: true, features: ["Everything in Basic", "Unlimited classes", "Rooftop track", "Steam room", "1 PT/month", "Diet plan"] },
      { id: "elite", name: "Elite", monthly: 2799, yearly: 27990, features: ["Everything in Pro", "Unlimited PT", "5 AM early access", "2 guest passes", "Monthly assessment", "Premium locker"] }
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
];

export const trainers: Trainer[] = [
  { id: "t1", name: "Vasundhara Rathore", gym: "alpha", speciality: "Strength & Conditioning", cert: "NSCA-CSCS", years: 6, featured: true, image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" },
  { id: "t2", name: "Ananya Singh", gym: "beta", speciality: "Yoga & Mindfulness", cert: "RYT-500", years: 8, featured: true, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
  { id: "t3", name: "Rajesh Kumar", gym: "alpha", speciality: "CrossFit & HIIT", cert: "CF-L2", years: 4, featured: true, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
  { id: "t4", name: "Vikram Gupta", gym: "beta", speciality: "Nutrition Coaching", cert: "PN Level 2", years: 5, featured: true, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1970&auto=format&fit=crop" }
];

export const schedule: ClassSlot[] = [
  { gym: "alpha", day: "Mon", time: "6:00 AM", name: "Morning Strength", trainer: "t1", duration: 60, type: "strength" },
  { gym: "alpha", day: "Mon", time: "8:00 AM", name: "HIIT Blast", trainer: "t3", duration: 45, type: "hiit" },
  { gym: "beta", day: "Mon", time: "7:00 AM", name: "Sunrise Yoga", trainer: "t2", duration: 60, type: "yoga" },
  { gym: "beta", day: "Mon", time: "9:00 AM", name: "CrossFit WOD", trainer: "t3", duration: 50, type: "crossfit" },
  { gym: "alpha", day: "Tue", time: "6:30 AM", name: "Barbell Basics", trainer: "t1", duration: 60, type: "strength" },
  { gym: "beta", day: "Tue", time: "7:30 AM", name: "Vinyasa Flow", trainer: "t2", duration: 60, type: "yoga" },
  { gym: "alpha", day: "Wed", time: "5:30 PM", name: "Power Hour", trainer: "t1", duration: 60, type: "strength" },
  { gym: "beta", day: "Wed", time: "6:30 PM", name: "HIIT Sprint", trainer: "t3", duration: 45, type: "hiit" }
];

export const testimonials = [
  { name: "Rahul Sharma", gym: "alpha", plan: "Elite", quote: "Dropped 12kg in 4 months. Olympic lifting zone is world-class.", rating: 5 },
  { name: "Priya Verma", gym: "beta", plan: "Pro", quote: "The yoga studio completely changed my routine.", rating: 5 },
  { name: "Amit Joshi", gym: "both", plan: "Elite", quote: "Member at both gyms — worth every rupee.", rating: 5 }
];

export const timeline = [
  { year: "2018", title: "Founded", desc: "Opened Alpha gym with 50 founding members" },
  { year: "2020", title: "Second location", desc: "Beta gym launched in Morar" },
  { year: "2022", title: "500 members", desc: "Crossed 500 active members across both branches" },
  { year: "2024", title: "Full renovation", desc: "New equipment, pool, and rooftop track added" }
];

export const faqs = [
  { q: "Is there a joining fee?", a: "No joining fee on any plan. Pay only the monthly or subscription fees." },
  { q: "Can I freeze my membership?", a: "Yes, once per year for up to 30 days." },
  { q: "Do you offer couple plans?", a: "Yes, 15% off when two members join together." },
  { q: "Is there a free trial?", a: "Yes — one free class at either gym, no commitment." },
  { q: "Can I use both gyms?", a: "Dual access is available as an add-on for ₹499/month." },
  { q: "What is the minimum age?", a: "16 years with parental consent, 18+ independently." },
  { q: "Are personal trainers included?", a: "1 PT session/month on Pro, unlimited on Elite." },
  { q: "What if I want to cancel?", a: "Cancel anytime — month-to-month, no lock-in." }
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", alt: "Elite Training Floor at Alpha", category: "facilities", gym: "JY Gymnasium", width: 1200, height: 800, featured: true },
  { id: "g2", src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop", alt: "Olympic-sized Infinity Pool", category: "facilities", gym: "JY Gymnasium", width: 1200, height: 900, featured: true },
  { id: "g3", src: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Finnish Sauna Room", category: "facilities", gym: "JY Gymnasium", width: 800, height: 1000, featured: false },
  { id: "g4", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", alt: "Pro-Grade CrossFit Arena", category: "facilities", gym: "JY Gymnasium 2.0", width: 1200, height: 800, featured: true },
  { id: "g5", src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop", alt: "Zen Yoga & Meditation Studio", category: "classes", gym: "JY Gymnasium 2.0", width: 1200, height: 800, featured: true },
  { id: "g6", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop", alt: "Panoramic Cardio Zone", category: "facilities", gym: "JY Gymnasium 2.0", width: 1600, height: 900, featured: true },
  { id: "g7", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", alt: "Elite Free Weights Section", category: "equipment", gym: "JY Gymnasium", width: 1200, height: 800, featured: false },
  { id: "g8", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop", alt: "Smart Technology Cardio Bay", category: "equipment", gym: "JY Gymnasium 2.0", width: 1200, height: 750, featured: false },
  { id: "g9", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", alt: "High-Intensity Interval Training", category: "classes", gym: "JY Gymnasium", width: 1200, height: 800, featured: false },
  { id: "g10", src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop", alt: "Advanced Strength Coaching", category: "classes", gym: "JY Gymnasium 2.0", width: 800, height: 1000, featured: false },
  { id: "g11", src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop", alt: "Transformation Milestones", category: "transformations", gym: "both", width: 800, height: 1000, featured: true },
  { id: "g12", src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop", alt: "Achievement & Progress", category: "transformations", gym: "both", width: 800, height: 1000, featured: false },
  { id: "g13", src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop", alt: "IronEdge Annual Marathon", category: "events", gym: "both", width: 1600, height: 900, featured: false },
  { id: "g14", src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop", alt: "Elite Membership Open House", category: "events", gym: "both", width: 1200, height: 800, featured: false },
];
