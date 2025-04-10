"use client";

import { GET_POKEMONS_BY_NAME_OR_TYPE } from "@/shared/graphql/queries/pokemons";
import { GetPokemonsByNameOrType } from "@/shared/graphql/types";
import { EmptyState } from "@/components/empty-state";
import { useQuery } from "@apollo/client";
import { DEFAULT_LIMIT_VALUE } from "@/shared/utils/constants";
import { ErrorState } from "./error-state";
import { LoadingState } from "./loading-state";
import { messages } from "@/messages/en";

interface PokemonListProps {
  searchParamsValue: string;
}

export const PokemonList = ({
  searchParamsValue,
}: Readonly<PokemonListProps>) => {
  const { data, error, loading } = useQuery<GetPokemonsByNameOrType>(
    GET_POKEMONS_BY_NAME_OR_TYPE,
    {
      variables: {
        search: searchParamsValue,
        limit: DEFAULT_LIMIT_VALUE,
      },
      skip: !searchParamsValue.length,
    }
  );

  if (loading)
    return (
      <div className="grid auto-rows-auto grid-cols-10 grid-rows-1 gap-8 mt-16">
        <LoadingState className="col-span-2" />
      </div>
    );

  if (error)
    return <ErrorState description={messages.errorState.searchError} />;

  if (!loading && !error && !searchParamsValue.length)
    return <EmptyState description={messages.emptyState.idle} />;

  if (
    !loading &&
    !error &&
    !!searchParamsValue.length &&
    !data?.pokemon_v2_pokemon?.length
  )
    return <EmptyState description={messages.emptyState.notFound} />;

  return (
    <div className="mt-16">
      <h1 className="text-default-400 flex h-full w-full items-center justify-center">
        Pokémon List
      </h1>
    </div>
  );
};
