"use client";

import { GET_POKEMONS_BY_NAME_OR_TYPE } from "@/shared/graphql/queries/pokemons";
import {
  GetPokemonsByNameOrType,
  GetPokemonsByNameOrTypeVariables,
} from "@/shared/graphql/types";
import { EmptyState } from "@/components/empty-state";
import { useQuery } from "@apollo/client";
import { DEFAULT_LIMIT_VALUE } from "@/shared/utils/constants";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { messages } from "@/messages/en";
import { PokemonCard } from "./pokemon-card";

interface PokemonListProps {
  searchParamsValue: string;
}

export const PokemonList = ({
  searchParamsValue,
}: Readonly<PokemonListProps>) => {
  const { data, error, loading } = useQuery<
    GetPokemonsByNameOrType,
    GetPokemonsByNameOrTypeVariables
  >(GET_POKEMONS_BY_NAME_OR_TYPE, {
    variables: {
      search: searchParamsValue,
      limit: DEFAULT_LIMIT_VALUE,
    },
    skip: !searchParamsValue.length,
  });

  if (loading)
    return (
      <div className="grid auto-rows-auto grid-cols-10 grid-rows-1 gap-8 mt-16">
        <LoadingState className="col-span-2" />
      </div>
    );

  if (error)
    return (
      <ErrorState description={messages.pokemonList.errorState.searchError} />
    );

  if (!loading && !error && !searchParamsValue.length)
    return <EmptyState description={messages.pokemonList.emptyState.idle} />;

  if (
    !loading &&
    !error &&
    !!searchParamsValue.length &&
    !data?.pokemon_v2_pokemon?.length
  )
    return (
      <EmptyState description={messages.pokemonList.emptyState.notFound} />
    );

  return (
    <div className="grid auto-rows-auto grid-cols-10 grid-rows-1 gap-8 mt-16">
      {data?.pokemon_v2_pokemon.map((pokemon) => (
        <PokemonCard
          key={`pokemon_id_${pokemon.id}`}
          pokemon={pokemon}
          className="col-span-2"
        />
      ))}
    </div>
  );
};
