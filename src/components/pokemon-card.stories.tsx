import { Pokemon } from "@/shared/graphql/types";
import { PokemonCard } from "./pokemon-card";
import type { Meta, StoryObj } from "@storybook/react";

const pokemon = {
  id: 1,
  name: "bulbasaur",
  pokemon_v2_pokemontypes: [
    {
      pokemon_v2_type: {
        name: "grass",
      },
    },
    {
      pokemon_v2_type: {
        name: "poison",
      },
    },
  ],
  pokemon_v2_pokemonsprites: [
    {
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    },
  ],
} as Pokemon;

const meta = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof PokemonCard>;

export default meta;

type Story = StoryObj<typeof PokemonCard>;

/**
 * The **PokemonCard** component displays basic info about a Pokémon (image, name, and types).
 *
 * It also includes a heart-shaped **Favorite button**, allowing the user to mark or unmark the Pokémon as a favorite.
 *
 * ### Favorite Button Behavior
 *
 * - Clicking the favorite button (heart icon) toggles the favorite status.
 * - Favorite IDs are stored in \`localStorage\` under the key \`favoritePokemonIds\`.
 * - The heart icon fills with red when the Pokémon is favorited.
 */
export const Default: Story = {
  args: {
    pokemon,
  },
};
