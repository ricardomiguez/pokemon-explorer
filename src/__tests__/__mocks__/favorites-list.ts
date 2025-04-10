import { GET_POKEMONS_BY_IDS } from "@/shared/graphql/queries/pokemons";

export const favoritePokemonName1 = "bulbasaur";

export const favoritePokemonName2 = "ivysaur";

const getPokemonsByIdsResponse = [
  {
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
          front_default: "https://example.com/bulbasaur.png",
        },
      },
    ],
  },
  {
    id: 2,
    name: "ivysaur",
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
          front_default: "https://example.com/ivysaur.png",
        },
      },
    ],
  },
];

export const getPokemonsByIdsRequest = [
  {
    request: {
      query: GET_POKEMONS_BY_IDS,
      variables: {
        ids: [1, 2],
      },
    },
    result: {
      data: {
        pokemon_v2_pokemon: getPokemonsByIdsResponse,
      },
    },
  },
];

export const getPokemonsByIdsNotFoundRequest = {
  request: {
    query: GET_POKEMONS_BY_IDS,
    variables: {
      ids: [0],
    },
  },
  result: {
    data: {
      pokemon_v2_pokemon: [],
    },
  },
};
