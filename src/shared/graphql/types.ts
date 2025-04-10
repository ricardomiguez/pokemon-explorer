export interface PokemonType {
  name: string;
}

export interface PokemonTypeRelation {
  pokemon_v2_type: PokemonType;
}

export interface PokemonSprite {
  sprites: {
    front_default: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonTypeRelation[];
  pokemon_v2_pokemonsprites: PokemonSprite[];
}

export interface GetPokemonsByNameOrType {
  pokemon_v2_pokemon: Pokemon[];
}

export interface GetPokemonsByNameOrTypeVariables {
  search: string;
  limit: number;
}

export interface GetPokemonsByIds {
  pokemon_v2_pokemon: Pokemon[];
}

export interface GetPokemonsByIdsVariables {
  ids: number[];
}
