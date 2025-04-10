"use client";

import { GET_POKEMONS_BY_IDS } from "@/shared/graphql/queries/pokemons";
import {
  GetPokemonsByIds,
  GetPokemonsByIdsVariables,
} from "@/shared/graphql/types";
import { EmptyState } from "@/components/empty-state";
import { useQuery } from "@apollo/client";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { messages } from "@/messages/en";
import { PokemonCard } from "./pokemon-card";
import { useEffect, useState } from "react";

export const FavoritesList = () => {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoritePokemon");
    if (stored) {
      const parsed = JSON.parse(stored);
      setIds(parsed);
    }
  }, []);

  const { data, error, loading } = useQuery<
    GetPokemonsByIds,
    GetPokemonsByIdsVariables
  >(GET_POKEMONS_BY_IDS, {
    variables: {
      ids,
    },
    skip: !ids.length,
  });

  if (loading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
        <LoadingState className="col-span-1" />
      </div>
    );

  if (error)
    return (
      <ErrorState description={messages.favoritesList.errorState.searchError} />
    );

  if (!loading && !error && !ids.length)
    return <EmptyState description={messages.favoritesList.emptyState.idle} />;

  if (!loading && !error && !!ids.length && !data?.pokemon_v2_pokemon?.length)
    return (
      <EmptyState description={messages.favoritesList.emptyState.notFound} />
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
      {data?.pokemon_v2_pokemon.map((pokemon) => (
        <PokemonCard
          key={`pokemon_id_${pokemon.id}`}
          pokemon={pokemon}
          className="col-span-1"
        />
      ))}
    </div>
  );
};
