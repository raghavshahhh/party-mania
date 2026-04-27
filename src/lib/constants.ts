export const SITE_CONFIG = {
  name: "Party Mania",
  tagline: "We Decorate, You Celebrate!",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "info@partymania.in",
  instagram: "@partymania.in",
  instagramUrl: "https://instagram.com/partymania.in",
  city: "Delhi NCR",
  currency: "INR",
  baseUrl: "https://partymania.in",
} as const;

export const THEME = {
  gold: "#D4AF37",
  goldLight: "#F5E6B8",
  goldDark: "#B8960C",
  black: "#050505",
  blackLight: "#1A1A1A",
  blackMuted: "#2A2A2A",
  white: "#FFFFFF",
  whiteSmoke: "#F5F5F5",
  accent: "#FFD700",
} as const;

export const ADVANCE_PERCENTAGE = 50;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Now" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_CATEGORIES = [
  {
    id: "birthday",
    label: "Birthday Decoration",
    description: "Stunning balloon arches, themed backdrops & photo zones",
    icon: "Cake",
  },
  {
    id: "anniversary",
    label: "Anniversary Decoration",
    description: "Romantic setups with florals, lights & personalized touches",
    icon: "Heart",
  },
  {
    id: "baby-shower",
    label: "Baby Shower",
    description: "Adorable pastel themes with custom props & balloon garlands",
    icon: "Baby",
  },
  {
    id: "engagement",
    label: "Engagement Decoration",
    description: "Elegant ring ceremony setups with premium floral arrangements",
    icon: "Gem",
  },
  {
    id: "haldi",
    label: "Haldi Ceremony",
    description: "Vibrant marigold decor with traditional Indian elements",
    icon: "Flower2",
  },
  {
    id: "mehendi",
    label: "Mehendi Setup",
    description: "Colorful bohemian setups with cushions & hanging elements",
    icon: "Palette",
  },
  {
    id: "corporate",
    label: "Corporate Events",
    description: "Professional event branding, stage decor & welcome setups",
    icon: "Building2",
  },
  {
    id: "custom",
    label: "Custom Decoration",
    description: "Tell us your vision — we'll bring it to life",
    icon: "Sparkles",
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Events Decorated" },
  { value: 4.9, suffix: "★", label: "Client Rating", isDecimal: true },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
  { value: 50, suffix: "+", label: "Unique Themes" },
] as const;

export const FEATURES = [
  {
    icon: "Palette",
    title: "Custom Themes",
    description: "Every decoration tailored uniquely to your vision, theme, and budget",
  },
  {
    icon: "Clock",
    title: "On-Time Setup",
    description: "We arrive early and set up perfectly — punctuality is our promise",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Best Prices",
    description: "Premium quality decorations at the most competitive prices in Delhi NCR",
  },
  {
    icon: "Camera",
    title: "Insta-Worthy",
    description: "Setups designed to look stunning in photos, reels & live streams",
  },
  {
    icon: "Sparkles",
    title: "Cleanup Included",
    description: "Full service from setup to teardown — you enjoy, we handle the rest",
  },
  {
    icon: "MessageCircle",
    title: "24/7 WhatsApp Support",
    description: "Instant responses for queries, changes & last-minute requests",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Vision",
    description: "Tell us about your event, date, venue & theme preference via WhatsApp or our booking form",
  },
  {
    step: "02",
    title: "Get a Custom Quote",
    description: "We design a personalized decoration plan with transparent pricing — no hidden costs",
  },
  {
    step: "03",
    title: "Confirm with 50% Advance",
    description: "Lock your date with a simple UPI/bank transfer. Rest is paid on the day of event",
  },
  {
    step: "04",
    title: "We Decorate, You Celebrate",
    description: "Our team arrives, sets up everything perfectly, and you enjoy your unforgettable event",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    event: "Birthday Party",
    rating: 5,
    text: "Absolutely magical! They transformed my living room into a fairy-tale setup for my daughter's birthday. The balloon arch was STUNNING.",
    location: "Dwarka, Delhi",
  },
  {
    name: "Rahul & Anita",
    event: "Anniversary",
    rating: 5,
    text: "The romantic setup they created for our 10th anniversary was beyond our expectations. Every detail was perfect and Instagram-worthy!",
    location: "Noida",
  },
  {
    name: "Meera Kapoor",
    event: "Baby Shower",
    rating: 5,
    text: "Such a beautiful pastel theme! All my guests couldn't stop taking photos. Professional team, on time, and cleaned up everything after.",
    location: "Gurgaon",
  },
  {
    name: "Arjun Singh",
    event: "Corporate Event",
    rating: 5,
    text: "We hired Party Mania for our office annual party. The stage decoration and branding setup was top-notch. Highly recommend!",
    location: "CP, New Delhi",
  },
  {
    name: "Sneha Gupta",
    event: "Engagement",
    rating: 5,
    text: "The ring ceremony setup was so elegant! Golden & white florals, fairy lights — it looked like a dream. Worth every penny.",
    location: "Rohini, Delhi",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What areas do you serve in Delhi NCR?",
    answer: "We cover all areas in Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. For locations outside NCR, please contact us for availability.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-5 days in advance for regular setups. For custom themes or weekend events, 7+ days is ideal. Last-minute bookings are subject to availability.",
  },
  {
    question: "What is the payment process?",
    answer: "50% advance to confirm your booking (via UPI, bank transfer, or card). The remaining 50% is paid on the day of the event after setup is complete.",
  },
  {
    question: "Do you handle cleanup after the event?",
    answer: "Yes! Our service includes complete setup and teardown. We clean up everything after your event, so you don't have to worry about a thing.",
  },
  {
    question: "Can I customize the decoration theme?",
    answer: "Absolutely! Every decoration is customized to your preference. Share your theme, color palette, or Pinterest inspiration — we'll bring it to life.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "Cancellations made 48+ hours before the event receive a full refund. Within 48 hours, we offer a free reschedule to another date (subject to availability).",
  },
] as const;

export const TIME_SLOTS = [
  { id: "morning", label: "Morning (8 AM - 12 PM)" },
  { id: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
  { id: "evening", label: "Evening (4 PM - 8 PM)" },
  { id: "night", label: "Night (8 PM - 12 AM)" },
] as const;

export const BOOKING_STATUSES = {
  pending: { label: "Pending", color: "yellow" },
  confirmed: { label: "Confirmed", color: "blue" },
  in_progress: { label: "In Progress", color: "orange" },
  completed: { label: "Completed", color: "green" },
  cancelled: { label: "Cancelled", color: "red" },
} as const;
