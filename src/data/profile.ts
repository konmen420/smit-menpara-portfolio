// Centralized profile configuration.
// All contact fields below are placeholders — replace with verified values before publishing.

export const profile = {
  name: "Smit Menpara",
  nameRegistered: "SMIT MENPARA®",
  title: "Developer / AI Engineer",
  tagline: "Building thoughtful digital experiences with code & intelligence.",
  intro:
    "I'm Smit Menpara, a Computer Science undergraduate at IIIT Kota interested in building intelligent systems, scalable applications, and meaningful digital products.",
  location: "IIIT Kota, India",
  // Placeholder — replace with a real email when available.
  email: "smit.menpara@example.com",
  // Placeholder — replace with a real GitHub handle/URL when available.
  github: "https://github.com/konmen420",
  // Placeholder — replace with a real LinkedIn URL when available.
  linkedin: "https://linkedin.com/in/smit-menpara",
  // Placeholder — replace with a real resume file path/URL when available.
  resumeUrl: "/resume.pdf",
  // Optional: real contact form endpoint. When set, the form POSTs here.
  // When null, the form falls back to a mailto link.
  contactEndpoint: null as string | null,
  // Accent color in hex (light + dark variants handled in CSS via CSS variables).
  accent: "#B8A57A",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];