export const SITE_CONFIG = {
  name: "State Of Mind",
  tagline: "Electronic Music Duo",
  description: "State Of Mind | Electronic Music Duo",
  email: "stateofmind2223@gmail.com",
  social: {
    instagram: "https://instagram.com/stateofmind.live",
    soundcloud: "https://soundcloud.com/state-of-mind-official",
    youtube: "https://youtu.be/v4R1SC3PGxk",
  },
};

export const NAV_LINKS = [
  { href: "#agenda", label: "Agenda" },
  { href: "#music", label: "Music" },
  { href: "#listen", label: "Listen" },
  { href: "#about", label: "About" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export const YOUTUBE_VIDEO_ID = "v4R1SC3PGxk";

export const ABOUT_CONTENT = {
  title: "About",
  subtitle: "The Duo",
  bio: [
    "State Of Mind is an electronic music duo known for pushing the boundaries of techno and house music. With a career spanning over a decade, they have become a staple in the underground scene.",
    "Drawing inspiration from the raw energy of warehouse raves and the sophistication of European club culture, State Of Mind creates sonic experiences that transcend the ordinary.",
    "From intimate club sets to massive festival stages, every performance is a journey through pulsating rhythms, hypnotic melodies, and earth-shaking basslines.",
  ],
};

export const MUSIC_CONTENT = {
  title: "Music",
  subtitle: "Latest Releases",
  tracks: [
    {
      id: 1,
      title: "Midnight Protocol",
      label: "Afterlife Records",
      year: "2025",
      coverImage: "/images/track-1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Neural Network EP",
      label: "Drumcode",
      year: "2025",
      coverImage: "/images/track-2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Deep State",
      label: "Kompakt",
      year: "2024",
      coverImage: "/images/track-3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Frequency Shift",
      label: "Innervisions",
      year: "2024",
      coverImage: "/images/track-4.jpg",
      link: "#",
    },
  ],
};

export const EVENTS_CONTENT = {
  title: "Agenda",
  subtitle: "Upcoming Shows",
  events: [
    {
      id: 1,
      date: "2026-02-13",
      venue: "Zaatar",
      city: "Barcelona",
      country: "ES",
      ticketUrl: "#",
      soldOut: true,
    },
    {
      id: 2,
      date: "2026-02-27",
      venue: "Dublin the Weekend",
      city: "Dublin",
      country: "IE",
      ticketUrl: "#",
      soldOut: true,
    },
    {
      id: 3,
      date: "2026-03-13",
      venue: "Volta",
      city: "Barcelona",
      country: "ES",
      ticketUrl: "#",
      soldOut: true,
    },
    {
      id: 4,
      date: "2026-06-27",
      venue: "Costa Brava",
      note: "Fiesta Privada",
      city: "Costa Brava",
      country: "ES",
      ticketUrl: "#",
      soldOut: true,
    },
  ],
};

export const SUPPORT_CONTENT = {
  title: "Support",
  subtitle: "Support the Artist",
  description:
    "We release music every week independently — no label, no middleman. If our sound moves you, a small contribution helps us keep creating.",
  presets: [5, 10, 25, 50],
  currency: "EUR",
  thankYouMessage: "Thank you for your support! It means the world to us.",
};

export const CONTACT_CONTENT = {
  title: "Contact",
  subtitle: "Get In Touch",
  booking: {
    title: "Bookings",
    email: "stateofmind2223@gmail.com",
  },
  press: {
    title: "Press & Media",
    email: "press@stateofmind.com",
  },
};
