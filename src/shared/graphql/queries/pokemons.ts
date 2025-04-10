import { gql } from "@apollo/client";

export const GET_POKEMONS_BY_NAME_OR_TYPE = gql`
  query GetPokemonsByNameOrType($search: String, $limit: Int!) {
    pokemon_v2_pokemon(
      limit: $limit
      where: {
        _or: [
          { name: { _ilike: $search } }
          {
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: { name: { _ilike: $search } }
            }
          }
        ]
      }
    ) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_POKEMONS_BY_IDS = gql`
  query GetPokemonsByIds($ids: [Int!]) {
    pokemon_v2_pokemon(where: { id: { _in: $ids } }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
