export type WebsiteConfig = typeof websiteConfig;

export const websiteConfig = {
  name: "Pokémon Explorer",
  description:
    "Search for Pokémon and add your favorite ones to a personalized list.",
  navItems: [
    {
      label: "Pokémon",
      href: "/pokemon",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
  ],
};
