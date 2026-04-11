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
  { id: "t1", name: "Vasundhara Rathore", gym: "alpha", speciality: "Fat Loss Specialist", cert: "NSCA-CSCS", years: 6, featured: true, image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" },
  { id: "t2", name: "Ananya Singh", gym: "beta", speciality: "Yoga & Mindfulness", cert: "RYT-500", years: 8, featured: true, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
  { id: "t3", name: "Rajesh Kumar", gym: "alpha", speciality: "Strength & HIIT Coach", cert: "CF-L2", years: 4, featured: true, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
  { id: "t4", name: "Vikram Gupta", gym: "beta", speciality: "Nutrition & Diet", cert: "PN Level 2", years: 5, featured: true, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1970&auto=format&fit=crop" },
  { id: "t5", name: "Meera Patel", gym: "alpha", speciality: "CrossFit Coach", cert: "CF-L3", years: 7, featured: true, image: "" },
  { id: "t6", name: "Arjun Rao", gym: "beta", speciality: "Sports Conditioning", cert: "ACSM-CPT", years: 5, featured: true, image: "" }
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
  { name: "Rahul Sharma", duration: "Member for 1 year", quote: "Dropped 12kg in 4 months. The coaching here is next level — every session felt like it was designed just for me.", rating: 5 },
  { name: "Priya Verma", duration: "Member for 8 months", quote: "The yoga studio completely changed my routine. I feel stronger, calmer, and more focused than ever before.", rating: 5 },
  { name: "Amit Joshi", duration: "Member for 2 years", quote: "I've been to five gyms in Gwalior. JY is on a different level — equipment, coaching, environment, everything.", rating: 5 }
];

export const timeline = [
  { year: "2018", title: "Founded", desc: "Opened Alpha gym with 50 founding members" },
  { year: "2020", title: "Second location", desc: "Beta gym launched in Morar" },
  { year: "2022", title: "500 members", desc: "Crossed 500 active members across both branches" },
  { year: "2024", title: "Full renovation", desc: "New equipment, pool, and rooftop track added" }
];

export const faqs = [
  { q: "Do I need experience to join?", a: "Not at all! Our trainers welcome all fitness levels — from complete beginners to seasoned athletes. We'll build a plan tailored to where you are right now." },
  { q: "What is included in the free trial?", a: "Your free trial includes a full day of gym access, one group class of your choice, a facility tour, and a consultation with one of our certified trainers." },
  { q: "Can I switch between programs?", a: "Absolutely. Switch between Weight Loss, Muscle Gain, Strength Training, and Cardio at any time — just speak with your trainer." },
  { q: "Do you provide a diet plan?", a: "Yes! Standard and Premium members receive a fully customized diet plan from our certified nutrition coaches, updated monthly." },
  { q: "What are your gym timings?", a: "Our main branch (Alpha) is open 24/7. Our Morar branch (Beta) operates from 5:00 AM to 11:00 PM on weekdays and 7:00 AM to 9:00 PM on weekends." },
  { q: "How do I cancel my membership?", a: "Cancel anytime with no penalties for monthly plans. Visit the front desk or message us on WhatsApp. Annual plans can be frozen for up to 30 days." },
  { q: "Is there a joining fee?", a: "No joining fee on any plan. Pay only the monthly or annual subscription." },
  { q: "Do you offer couple plans?", a: "Yes — 15% off when two members join together on any plan." }
];

export const programs = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    tagline: "Burn Fat. Not Your Motivation.",
    description: "Our science-backed fat loss protocols combine HIIT cardio, resistance training, and personalized nutrition plans to shred body fat while preserving lean muscle mass.",
    benefits: ["Custom cardio + diet plan", "Weekly check-ins with coach", "Visible results in 4 weeks"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    cta: "Start Weight Loss Program"
  },
  {
    id: "muscle-gain",
    title: "Muscle Gain",
    tagline: "Build Muscle. Build Confidence.",
    description: "Progressive overload training with expert spotting, customized meal plans, and supplement guidance to pack on quality muscle and hit your strength PRs.",
    benefits: ["Progressive overload programming", "Protein guidance + meal plans", "Monthly strength tracking"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    cta: "Start Muscle Gain Program"
  },
  {
    id: "strength",
    title: "Strength Training",
    tagline: "Get Strong. Stay Strong.",
    description: "Master the fundamentals of powerlifting with certified coaches. Focus on compound movements, technique refinement, and monthly PR targets.",
    benefits: ["Powerlifting technique coaching", "Compound movement focus", "Monthly PR targets"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop",
    cta: "Start Strength Training"
  },
  {
    id: "cardio",
    title: "Cardio Fitness",
    tagline: "Move Better. Live Longer.",
    description: "A balanced approach to cardiovascular health covering endurance building, heart health monitoring, and high-energy group cardio sessions.",
    benefits: ["Endurance building protocols", "Heart health monitoring", "Group cardio sessions"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    cta: "Start Cardio Program"
  }
];

export const galleryItems = [
  { id: 1, label: '[ Weight Training Floor ]', category: 'Gym Tour', height: 280 },
  { id: 2, label: '[ Battle Ropes Area ]', category: 'Equipment', height: 220 },
  { id: 3, label: '[ Member — 90 Day Result ]', category: 'Transformations', height: 320 },
  { id: 4, label: '[ Cardio Zone ]', category: 'Equipment', height: 240 },
  { id: 5, label: '[ Group HIIT Class ]', category: 'Classes', height: 260 },
  { id: 6, label: '[ Member — 90 Day Result ]', category: 'Transformations', height: 300 },
  { id: 7, label: '[ Gym Entrance ]', category: 'Gym Tour', height: 220 },
  { id: 8, label: '[ Annual Fitness Event ]', category: 'Events', height: 280 },
  { id: 9, label: '[ Spinning Class ]', category: 'Classes', height: 240 },
  { id: 10, label: '[ Free Weights Rack ]', category: 'Equipment', height: 260 },
  { id: 11, label: '[ Member Milestone Celebration ]', category: 'Events', height: 220 },
  { id: 12, label: '[ Member — 90 Day Result ]', category: 'Transformations', height: 340 },
];

export const transformations = [
  { name: "Rahul S.", duration: "90 days", program: "Weight Loss" },
  { name: "Priya M.", duration: "90 days", program: "Muscle Gain" },
  { name: "Amit G.", duration: "90 days", program: "Strength Training" },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", alt: "Elite Training Floor at Alpha", category: "facilities", gym: "JY Gymnasium", width: 1200, height: 800, featured: true },
  { id: "g2", src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop", alt: "Olympic-sized Infinity Pool", category: "facilities", gym: "JY Gymnasium", width: 1200, height: 900, featured: true },
  { id: "g3", src: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Finnish Sauna Room", category: "facilities", gym: "JY Gymnasium", width: 800, height: 1000, featured: false },
  { id: "g4", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", alt: "Pro-Grade CrossFit Arena", category: "facilities", gym: "JY Gymnasium 2.0", width: 1200, height: 800, featured: true },
  { id: "g5", src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop", alt: "Zen Yoga & Meditation Studio", category: "classes", gym: "JY Gymnasium 2.0", width: 1200, height: 800, featured: true },
  { id: "g6", src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop", alt: "Panoramic Cardio Zone", category: "facilities", gym: "JY Gymnasium 2.0", width: 1600, height: 900, featured: true },
];
