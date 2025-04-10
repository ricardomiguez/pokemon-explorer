import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { cn } from "@heroui/react";

import { websiteConfig } from "@/config/website";
import { PokeballIcon } from "./icons/pokeball-icon";
import { messages } from "@/messages/en";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="shadow-black/5 shadow-small"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <PokeballIcon />
            <p className="font-bold text-inherit">{messages.navBar.title}</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {websiteConfig.navItems.map((item) => (
            <NavbarItem key={`navbar_${item.label}_item`}>
              <NextLink
                className={cn(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </HeroUINavbar>
  );
};
