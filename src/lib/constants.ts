export const SITE_CONFIG = {
  name: "Party Mania",
  tagline: "We Decorate, You Celebrate!",
  phone: "+91-9876543210",          // TODO: Replace with real number
  whatsapp: "919876543210",          // TODO: Replace with real WhatsApp number
  email: "partymania.delhi@gmail.com", // TODO: Replace with real email
  instagram: "@partymania.delhi",    // TODO: Replace with real Instagram
  instagramUrl: "https://instagram.com/partymania.delhi", // TODO: Replace with real URL
  city: "Delhi NCR",
  currency: "INR",
  baseUrl: "https://partymania.in",
  address: "Dwarka, New Delhi, India", // TODO: Replace with real address
  googleMapsUrl: "https://maps.google.com/?q=Dwarka+New+Delhi", // TODO: Replace with real embed
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
    startingPrice: 2999,
    image: "/images/birthday.jpg",
    features: ["Balloon Arch", "Themed Backdrop", "Photo Zone", "Table Setup", "LED Lights", "Custom Banner"],
    longDescription: "Make every birthday unforgettable with our premium decoration packages. From kids' cartoon themes to elegant adult celebrations — we create magic with balloon arches, themed backdrops, sparkling LED setups, and picture-perfect photo zones.",
  },
  {
    id: "anniversary",
    label: "Anniversary Decoration",
    description: "Romantic setups with florals, lights & personalized touches",
    icon: "Heart",
    startingPrice: 3999,
    image: "/images/anniversary.jpg",
    features: ["Rose Petal Path", "Candle Arrangement", "Heart Balloon Arch", "LED Fairy Lights", "Custom Name Board", "Photo Wall"],
    longDescription: "Celebrate your love story with a dreamy anniversary setup. Romantic rose petal paths, warm candlelight arrangements, heart-shaped balloon arches, and personalized name boards — everything to make your evening special.",
  },
  {
    id: "baby-shower",
    label: "Baby Shower",
    description: "Adorable pastel themes with custom props & balloon garlands",
    icon: "Baby",
    startingPrice: 4999,
    image: "/images/baby-shower.jpg",
    features: ["Pastel Balloon Garland", "Baby Props", "Welcome Board", "Dessert Table Setup", "Photo Booth", "Theme Decor"],
    longDescription: "Welcome the little one with a beautiful baby shower celebration. Soft pastel balloon garlands, adorable baby props, customized welcome boards, and Instagram-worthy dessert table setups — all designed to create warm memories.",
  },
  {
    id: "engagement",
    label: "Engagement Decoration",
    description: "Elegant ring ceremony setups with premium floral arrangements",
    icon: "Gem",
    startingPrice: 7999,
    image: "/images/engagement.jpg",
    features: ["Ring Ceremony Stage", "Floral Arch", "LED Backdrop", "Entry Path Decor", "Couple Name Board", "Lighting Setup"],
    longDescription: "Make your ring ceremony grand with our premium engagement decoration. Elegant floral arches, stunning LED backdrops, decorated entry paths, and personalized couple name boards — a celebration that matches your love.",
  },
  {
    id: "haldi",
    label: "Haldi Ceremony",
    description: "Vibrant marigold decor with traditional Indian elements",
    icon: "Flower2",
    startingPrice: 4999,
    image: "/images/haldi.jpg",
    features: ["Marigold Canopy", "Haldi Thali Setup", "Rangoli Design", "Flower Curtain", "Traditional Props", "Yellow Theme Decor"],
    longDescription: "Celebrate the haldi ceremony with vibrant marigold decorations and traditional Indian elements. From marigold canopies and rangoli designs to flower curtains and themed props — we bring the festive vibes alive.",
  },
  {
    id: "mehendi",
    label: "Mehendi Setup",
    description: "Colorful bohemian setups with cushions & hanging elements",
    icon: "Palette",
    startingPrice: 5999,
    image: "/images/mehendi.jpg",
    features: ["Bohemian Canopy", "Cushion Seating", "Hanging Lanterns", "Floral Chandelier", "Colorful Drapes", "Mehendi Stage"],
    longDescription: "Create a stunning mehendi setup with colorful bohemian vibes. Beautiful canopy arrangements, cushion seating areas, hanging lanterns, floral chandeliers, and vibrant drapes that set the perfect mood for the celebration.",
  },
  {
    id: "corporate",
    label: "Corporate Events",
    description: "Professional event branding, stage decor & welcome setups",
    icon: "Building2",
    startingPrice: 9999,
    image: "/images/corporate.jpg",
    features: ["Stage Branding", "Welcome Desk", "Photo Booth", "LED Wall Setup", "Table Centerpieces", "Corporate Colors"],
    longDescription: "Elevate your corporate events with professional decoration services. Stage branding, elegant welcome desks, branded photo booths, LED wall setups, and sophisticated table centerpieces — all aligned with your company's identity.",
  },
  {
    id: "custom",
    label: "Custom Decoration",
    description: "Tell us your vision — we'll bring it to life",
    icon: "Sparkles",
    startingPrice: 1999,
    image: "/images/custom.jpg",
    features: ["Custom Theme", "Personalized Design", "Flexible Budget", "Unique Props", "Full Customization", "Creative Consultation"],
    longDescription: "Have a unique vision? We specialize in bringing custom decoration ideas to life. From Pinterest-inspired themes to completely original concepts — share your dream and we'll make it reality, within your budget.",
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
    event: "Daughter's Birthday",
    rating: 5,
    text: "Party Mania transformed our living room into a fairy-tale setup. The balloon arch and themed backdrop were exactly what my daughter wanted. The team was punctual and very professional!",
    location: "Dwarka, Delhi",
  },
  {
    name: "Rahul & Anita Verma",
    event: "10th Anniversary",
    rating: 5,
    text: "We wanted something intimate yet grand for our anniversary. The candle arrangement and heart balloon arch made our evening magical. Every guest was impressed!",
    location: "Sector 62, Noida",
  },
  {
    name: "Meera Kapoor",
    event: "Baby Shower",
    rating: 5,
    text: "The pastel theme they suggested was perfect. Custom props, dessert table setup, and the photo booth — my guests couldn't stop clicking pictures. Great work!",
    location: "DLF Phase 3, Gurgaon",
  },
  {
    name: "Arjun Singh",
    event: "Office Annual Party",
    rating: 4,
    text: "We hired them for our company's annual party. Stage branding and welcome desk looked professional. Delivery was on time and within budget.",
    location: "Connaught Place, Delhi",
  },
  {
    name: "Sneha & Vikram Gupta",
    event: "Engagement Ceremony",
    rating: 5,
    text: "Golden and white florals with fairy lights — our ring ceremony looked straight out of a movie. The team even stayed for adjustments. Worth every rupee!",
    location: "Rohini, Delhi",
  },
  {
    name: "Kavita Joshi",
    event: "Haldi Ceremony",
    rating: 5,
    text: "The marigold canopy and rangoli design were absolutely stunning. They understood the traditional vibe we wanted and delivered beyond expectations.",
    location: "Ghaziabad",
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

export const GALLERY_ITEMS = [
  { id: "g1", category: "birthday", title: "Princess Theme Birthday", description: "Pink & gold balloon arch with castle backdrop" },
  { id: "g2", category: "birthday", title: "Superhero Birthday", description: "Comic-themed setup with action props" },
  { id: "g3", category: "birthday", title: "Minimalist Adult Birthday", description: "Elegant black & gold celebration" },
  { id: "g4", category: "anniversary", title: "Silver Anniversary", description: "Romantic candlelit pathway with roses" },
  { id: "g5", category: "anniversary", title: "Golden Jubilee", description: "Grand floral arch with fairy lights" },
  { id: "g6", category: "baby-shower", title: "Pastel Dream Baby Shower", description: "Soft pink & mint balloon garland" },
  { id: "g7", category: "baby-shower", title: "Twinkle Star Theme", description: "Night sky setup with star props" },
  { id: "g8", category: "engagement", title: "Royal Ring Ceremony", description: "White & gold stage with floral pillars" },
  { id: "g9", category: "engagement", title: "Garden Engagement", description: "Open-air floral mandap setup" },
  { id: "g10", category: "haldi", title: "Traditional Haldi", description: "Marigold canopy with brass utensils" },
  { id: "g11", category: "mehendi", title: "Boho Mehendi", description: "Colorful canopy with cushion seating" },
  { id: "g12", category: "corporate", title: "Product Launch", description: "Branded stage with LED wall" },
] as const;

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "birthday", label: "Birthday" },
  { id: "anniversary", label: "Anniversary" },
  { id: "baby-shower", label: "Baby Shower" },
  { id: "engagement", label: "Engagement" },
  { id: "haldi", label: "Haldi" },
  { id: "mehendi", label: "Mehendi" },
  { id: "corporate", label: "Corporate" },
] as const;

export const PRICING_PACKAGES = {
  birthday: [
    { name: "Basic", price: 2999, features: ["Balloon Arch (6ft)", "Happy Birthday Banner", "50 Balloons", "Setup & Cleanup"] },
    { name: "Standard", price: 5999, features: ["Balloon Arch (8ft)", "Themed Backdrop", "100 Balloons", "LED String Lights", "Table Setup", "Setup & Cleanup"] },
    { name: "Premium", price: 9999, features: ["Balloon Arch (10ft)", "Custom Themed Backdrop", "200+ Balloons", "LED Fairy Lights", "Photo Zone", "Custom Banner", "Table Centerpieces", "Setup & Cleanup"] },
  ],
  anniversary: [
    { name: "Romantic", price: 3999, features: ["Heart Balloon Arch", "Rose Petal Path", "LED Candles", "Setup & Cleanup"] },
    { name: "Grand", price: 7999, features: ["Heart Balloon Arch", "Rose Petal Path", "LED Candles", "Custom Name Board", "Photo Wall", "Setup & Cleanup"] },
    { name: "Royal", price: 14999, features: ["Grand Floral Arch", "Rose Petal Path", "100 LED Candles", "Custom Name Board", "Photo Wall", "Champagne Setup", "Fairy Light Canopy", "Setup & Cleanup"] },
  ],
  "baby-shower": [
    { name: "Sweet", price: 4999, features: ["Pastel Balloon Garland", "Baby Props", "Welcome Board", "Setup & Cleanup"] },
    { name: "Dreamy", price: 8999, features: ["Pastel Balloon Garland", "Baby Props", "Welcome Board", "Dessert Table Setup", "Photo Booth", "Setup & Cleanup"] },
    { name: "Luxe", price: 14999, features: ["Premium Balloon Garland", "Custom Baby Props", "Welcome Board", "Dessert Table Setup", "Photo Booth", "Floral Centerpieces", "Backdrop Wall", "Setup & Cleanup"] },
  ],
  engagement: [
    { name: "Classic", price: 7999, features: ["Ring Ceremony Stage", "Floral Arch", "LED Backdrop", "Setup & Cleanup"] },
    { name: "Elegant", price: 14999, features: ["Ring Ceremony Stage", "Grand Floral Arch", "LED Backdrop", "Entry Path Decor", "Couple Name Board", "Setup & Cleanup"] },
    { name: "Grand", price: 24999, features: ["Premium Stage Setup", "Grand Floral Arch", "LED Wall", "Decorated Entry Path", "Couple Name Board", "Lighting Setup", "Floral Pillars", "Setup & Cleanup"] },
  ],
  haldi: [
    { name: "Traditional", price: 4999, features: ["Marigold Canopy", "Haldi Thali Setup", "Rangoli", "Setup & Cleanup"] },
    { name: "Vibrant", price: 8999, features: ["Marigold Canopy", "Haldi Thali Setup", "Rangoli Design", "Flower Curtain", "Traditional Props", "Setup & Cleanup"] },
    { name: "Royal", price: 13999, features: ["Grand Marigold Setup", "Haldi Thali Setup", "Rangoli Design", "Flower Curtain", "Traditional Props", "Yellow Theme Decor", "Seating Area", "Setup & Cleanup"] },
  ],
  mehendi: [
    { name: "Boho", price: 5999, features: ["Bohemian Canopy", "Cushion Seating", "Hanging Lanterns", "Setup & Cleanup"] },
    { name: "Festive", price: 9999, features: ["Bohemian Canopy", "Cushion Seating", "Hanging Lanterns", "Floral Chandelier", "Colorful Drapes", "Setup & Cleanup"] },
    { name: "Magnificent", price: 16999, features: ["Premium Canopy", "Cushion Seating", "Hanging Lanterns", "Floral Chandelier", "Colorful Drapes", "Mehendi Stage", "Backdrop Wall", "Setup & Cleanup"] },
  ],
  corporate: [
    { name: "Starter", price: 9999, features: ["Stage Branding", "Welcome Desk", "Basic Lighting", "Setup & Cleanup"] },
    { name: "Professional", price: 19999, features: ["Stage Branding", "Welcome Desk", "Photo Booth", "LED Wall Setup", "Table Centerpieces", "Setup & Cleanup"] },
    { name: "Enterprise", price: 34999, features: ["Premium Stage Branding", "Welcome Desk", "Branded Photo Booth", "LED Wall Setup", "Table Centerpieces", "Corporate Colors", "Full Lighting Setup", "Setup & Cleanup"] },
  ],
  custom: [
    { name: "Budget", price: 1999, features: ["Basic Decoration", "Balloon Setup", "Custom Touches", "Setup & Cleanup"] },
    { name: "Creative", price: 7999, features: ["Custom Theme Design", "Personalized Props", "Balloon Setup", "Lighting", "Setup & Cleanup"] },
    { name: "Bespoke", price: 14999, features: ["Full Custom Design", "Premium Props", "Balloon Art", "Full Lighting", "Backdrop", "Consultation", "Setup & Cleanup"] },
  ],
} as const;

export const CONTACT_INFO = {
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsapp,
  email: SITE_CONFIG.email,
  instagram: SITE_CONFIG.instagramUrl,
  address: SITE_CONFIG.address,
  hours: "Mon-Sun: 9:00 AM - 10:00 PM",
  areas: [
    "Dwarka", "Rohini", "Pitampura", "Janakpuri", "Vikaspuri",
    "Connaught Place", "Greater Kailash", "Hauz Khas",
    "Noida (All Sectors)", "Gurgaon (DLF, Sohna Road)",
    "Ghaziabad (Vaishali, Indirapuram)", "Faridabad",
  ],
} as const;
