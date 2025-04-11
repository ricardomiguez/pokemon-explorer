import { PokemonList } from "@/components/pokemon-list";
import { SearchInput } from "@/components/search-input";
import { messages } from "@/messages/en";
import {
  DEFAULT_SEARCH_PARAMS_VALUES,
  SEARCH_PARAMS_KEYS,
} from "@/shared/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: messages.pokemonList.title,
};

interface PokemonPageProps {
  searchParams: Promise<{ search: string }>;
}

export default async function PokemonPage({
  searchParams,
}: Readonly<PokemonPageProps>) {
  const { search } = await searchParams;

  const currentSearchValue = (search ||
    DEFAULT_SEARCH_PARAMS_VALUES.SEARCH) as string;

  return (
    <>
      <SearchInput
        searchParamsKey={SEARCH_PARAMS_KEYS.SEARCH}
        searchParamsValue={currentSearchValue}
      />
      <PokemonList searchParamsValue={currentSearchValue} />
    </>
  );
}
