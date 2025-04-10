import { Pokemon } from "@/shared/graphql/types";

export const pokemonId = 25;

export const pokemonName = "pikachu";

export const pokemonImage = "https://example.com/pikachu.png";

export const pokemonType = "electric";

export const pokemon = {
  id: 25,
  name: "pikachu",
  pokemon_v2_pokemontypes: [
    {
      pokemon_v2_type: {
        name: "electric",
      },
    },
  ],
  pokemon_v2_pokemonsprites: [
    {
      sprites: {
        front_default: "https://example.com/pikachu.png",
      },
    },
  ],
} as Pokemon;
