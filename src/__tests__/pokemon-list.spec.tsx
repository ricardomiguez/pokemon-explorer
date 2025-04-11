import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { messages } from "@/messages/en";
import { PokemonList } from "@/components/pokemon-list";
import {
  defaultSearchParamValue,
  emptyStateIdleSearchParamValue,
  emptyStateNotFoundSearchParamValue,
  getPokemonsByNameOrTypeNotFoundRequest,
  getPokemonsByNameOrTypeRequest,
} from "./__mocks__/pokemon-list";

describe("PokemonList", () => {
  it("should render loading state", () => {
    render(
      <MockedProvider
        mocks={getPokemonsByNameOrTypeRequest}
        addTypename={false}
      >
        <PokemonList searchParamsValue={defaultSearchParamValue} />
      </MockedProvider>
    );

    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("should render error state", async () => {
    render(
      <MockedProvider
        mocks={[
          { ...getPokemonsByNameOrTypeRequest[0], error: new Error("Error") },
        ]}
      >
        <PokemonList searchParamsValue={defaultSearchParamValue} />
      </MockedProvider>
    );

    const errorState = await screen.findByText(
      messages.pokemonList.errorState.searchError
    );

    expect(errorState).toBeInTheDocument();
  });

  it("should render empty idle state", async () => {
    render(
      <MockedProvider mocks={[]}>
        <PokemonList searchParamsValue={emptyStateIdleSearchParamValue} />
      </MockedProvider>
    );

    const emptyStateIdle = await screen.findByText(
      messages.pokemonList.emptyState.idle
    );

    expect(emptyStateIdle).toBeInTheDocument();
  });

  it("should render empty not-found state", async () => {
    render(
      <MockedProvider
        mocks={[getPokemonsByNameOrTypeNotFoundRequest]}
        addTypename={false}
      >
        <PokemonList searchParamsValue={emptyStateNotFoundSearchParamValue} />
      </MockedProvider>
    );

    const emptyStateNotFound = await screen.findByText(
      messages.pokemonList.emptyState.notFound
    );

    expect(emptyStateNotFound).toBeInTheDocument();
  });

  it("should render list of Pokémon", async () => {
    render(
      <MockedProvider
        mocks={getPokemonsByNameOrTypeRequest}
        addTypename={false}
      >
        <PokemonList searchParamsValue={defaultSearchParamValue} />
      </MockedProvider>
    );

    const listedPokemon = await screen.findByText(defaultSearchParamValue);

    expect(listedPokemon).toBeInTheDocument();
  });
});
