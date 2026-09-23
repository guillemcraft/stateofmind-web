export const SITE_CONFIG = {
  name: "State Of Mind",
  tagline: "DJ duo · House",
  description:
    "State Of Mind is a Barcelona-based DJ duo. House — warm grooves, heavy low end and vocal moments. Bookings for clubs, festivals, labels and brands.",
  email: "stateofmind2223@gmail.com",
  location: "Barcelona, Spain",
  social: {
    instagram: "https://instagram.com/stateofmind.live",
    soundcloud: "https://soundcloud.com/state-of-mind-official",
    youtube: "https://www.youtube.com/@stateofmindduo",
    spotify: "https://open.spotify.com/artist/1QsyP0ARPJPpBW7IdgWyEH",
  },
};

export const PRESSKIT = {
  href: "/state-of-mind-presskit-2026.pdf",
  meta: "PDF · 3.6 MB",
};

export const ICON_SOCIALS = [
  { name: "Instagram", icon: "instagram", url: SITE_CONFIG.social.instagram },
  { name: "SoundCloud", icon: "soundcloud", url: SITE_CONFIG.social.soundcloud },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#sound", label: "Sound" },
  { href: "#formats", label: "Formats" },
  { href: "#live", label: "Live" },
  { href: "#listen", label: "Listen" },
  { href: "#support", label: "Support" },
  { href: "#bookings", label: "Bookings" },
];

export const YOUTUBE_VIDEO_ID = "v4R1SC3PGxk";

export const HERO_CONTENT = {
  title: ["State of", "Mind"],
  subtitle: "DJ duo · House",
  location: "Barcelona, ES",
  audience: ["Clubs", "Festivals", "Labels", "Brands"],
};

export const ABOUT_CONTENT = {
  number: "02",
  label: "About",
  title: ["Music that", "moves", "the room."],
  bio: "State of Mind is a Barcelona-based DJ duo. We play house — warm grooves, heavy low end and vocal moments. Sets that connect with a dancefloor rather than perform at it.",
  facts: [
    { label: "Based", value: "Barcelona" },
    { label: "Format", value: "Duo, b2b" },
    { label: "Sets", value: "2 h – all night" },
    { label: "Influences", value: "ANOTR, PAWSA, Michael Bibi, Carl Cox" },
  ],
};

export const SOUND_CONTENT = {
  number: "03",
  label: "The Sound",
  genres: ["House", "Deep & Organic House", "Tech House"],
  description:
    "Sets evolve with the night — relaxed and groove-led early, building into peak-time energy. We read the room and program to it, not against it.",
};

export const FORMATS_CONTENT = {
  number: "04",
  label: "Formats",
  title: "Built for the booth.",
  items: [
    { title: "Club nights", description: "Warm-up, peak or closing slots. 2–4 h." },
    { title: "Extended sets", description: "All-night-long residencies and 5 h+ journeys." },
    { title: "Day parties", description: "Terraces, rooftops, beach clubs and sunset sessions." },
    { title: "Festivals", description: "Stage slots and after-parties, main or side stage." },
    { title: "Radio & streams", description: "Guest mixes, podcasts and live-streamed sets." },
    { title: "Brand activations", description: "Launches, pop-ups and showcases with a curated sound." },
    { title: "Hotels & venues", description: "Pool sessions, cocktail nights and VIP events." },
    { title: "Private events", description: "Weddings and celebrations with a dancefloor-first approach." },
  ],
};

export const DATES_CONTENT = {
  number: "05",
  label: "Selected Dates",
  title: ["Where we've", "played."],
  description: "Clubs, rooftops and venues across Barcelona and the Costa Brava.",
  venues: [
    { name: "La Paloma", city: "Barcelona", year: "2026" },
    { name: "Ku Club (ex-Pacha)", city: "Barcelona", year: "2026" },
    { name: "Boiler Room × Digital Nomads", city: "Barcelona", year: "2026" },
    { name: "Norrsken", city: "Barcelona", year: "2026" },
    { name: "Skappa", city: "Barcelona", year: "2026" },
    { name: "Za'atar Rooftop", city: "Barcelona", year: "2026" },
    { name: "Private Villas (×3)", city: "Costa Brava · Ibiza", year: "2025–26" },
  ],
};

export const LIVE_CONTENT = {
  number: "06",
  label: "Live",
  title: "Moments we've created",
  photos: [
    { src: "/images/moments-1.jpg", alt: "State Of Mind playing under blue and green lights", width: 825, height: 946 },
    { src: "/images/moments-2.jpg", alt: "State Of Mind on a seaside terrace", width: 733, height: 576 },
    { src: "/images/moments-3.jpg", alt: "State Of Mind behind the decks", width: 938, height: 733 },
    { src: "/images/moments-4.jpg", alt: "State Of Mind in the Pyrenees", width: 1600, height: 615 },
  ],
};

export const WHY_CONTENT = {
  number: "07",
  label: "Why Book Us",
  title: ["Easy to book.", "Hard to forget."],
  items: [
    { title: "Crowd reading", description: "We program to the room in real time — no pre-recorded sets." },
    { title: "Flexible slots", description: "Warm-up, peak or closing. Solo, duo or b2b with residents." },
    { title: "Professional setup", description: "Industry-standard gear, own system available. Soundcheck on time." },
    { title: "Reliable communication", description: "One contact, fast replies, clear riders and confirmations." },
    { title: "Promo-ready", description: "Press photos, logos, bios and mixes delivered with the booking." },
    { title: "Venue experience", description: "Clubs, hotels, rooftops and private events across Barcelona." },
  ],
};

export const LISTEN_CONTENT = {
  number: "08",
  label: "Listen",
  title: ["Hear it before", "you book it."],
  platforms: [
    { name: "Spotify", handle: "State Of Mind", url: SITE_CONFIG.social.spotify },
    { name: "SoundCloud", handle: "state-of-mind-official", url: SITE_CONFIG.social.soundcloud },
    { name: "YouTube", handle: "@stateofmindduo", url: SITE_CONFIG.social.youtube },
    { name: "Instagram", handle: "@stateofmind.live", url: SITE_CONFIG.social.instagram },
  ],
  videos: [
    { id: "v4R1SC3PGxk", title: "State Of Mind — latest release" },
    { id: "2OzZn0cop-g", title: "State Of Mind — release" },
    { id: "9QiQ7qCGgBs", title: "State Of Mind — release" },
    { id: "BynN0B1S9VA", title: "State Of Mind — release" },
    { id: "rr7JN9rXi0M", title: "State Of Mind — release" },
    { id: "EuJqv9AP_Wo", title: "State Of Mind — release" },
    { id: "JCoLqidWjkE", title: "State Of Mind — release" },
  ],
  tracks: [
    "https://soundcloud.com/state-of-mind-official/state-of-mind-ba-ilalo",
    "https://soundcloud.com/state-of-mind-official/state-of-mind-ricos-besos-free-download",
    "https://soundcloud.com/state-of-mind-official/b09f92d6-030c-415e-931e-87884e31cd92",
    "https://soundcloud.com/state-of-mind-official/1343cf84-27cd-47d2-99ad-94ceae23bb3a",
    "https://soundcloud.com/state-of-mind-official/0d37bb4b-9b8c-43c4-bc94-934a07a27e6f",
    "https://soundcloud.com/state-of-mind-official/4c77d7f0-98e6-4a60-a0ab-86eeed2e00f6",
  ],
};

export const SUPPORT_CONTENT = {
  number: "09",
  label: "Support",
  title: ["Support", "the artist."],
  description:
    "We release music every week independently — no label, no middleman. If our sound moves you, a small contribution helps us keep creating.",
  presets: [5, 10, 25, 50],
  currency: "EUR",
  thankYouMessage: "Thank you for your support! It means the world to us.",
};

export const BOOKINGS_CONTENT = {
  number: "10",
  label: "Bookings",
  title: ["Let's make", "it a night."],
  contacts: [
    { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { label: "Instagram", value: "@stateofmind.live", href: SITE_CONFIG.social.instagram },
    { label: "SoundCloud", value: "state-of-mind-official", href: SITE_CONFIG.social.soundcloud },
  ],
  tagline: "Barcelona, Spain · Good music. Good people. Good times.",
};
