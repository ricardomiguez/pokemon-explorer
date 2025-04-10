import { GET_POKEMONS_BY_NAME_OR_TYPE } from "@/shared/graphql/queries/pokemons";

export const defaultSearchParamValue = "pikachu";

export const emptyStateIdleSearchParamValue = "";

export const emptyStateNotFoundSearchParamValue = "any";

const getPokemonsByNameOrTypeResponse = [
  {
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
  },
];

export const getPokemonsByNameOrTypeRequest = [
  {
    request: {
      query: GET_POKEMONS_BY_NAME_OR_TYPE,
      variables: {
        search: "pikachu",
        limit: 10,
      },
    },
    result: {
      data: {
        pokemon_v2_pokemon: getPokemonsByNameOrTypeResponse,
      },
    },
  },
];

export const getPokemonsByNameOrTypeNotFoundRequest = {
  request: {
    query: GET_POKEMONS_BY_NAME_OR_TYPE,
    variables: {
      search: "any",
      limit: 10,
    },
  },
  result: {
    data: {
      pokemon_v2_pokemon: [],
    },
  },
};
