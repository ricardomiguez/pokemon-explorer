import { PokemonList } from "@/components/pokemon-list";
import { SearchInput } from "@/components/search-input";
import {
  DEFAULT_SEARCH_PARAMS_VALUES,
  SEARCH_PARAMS_KEYS,
} from "@/shared/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon",
};

interface PokemonPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
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
