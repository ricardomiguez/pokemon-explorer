import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { FavoritesList } from "@/components/favorites-list"; // Adjust path to where FavoritesList is located
import {
  favoritePokemonName1,
  favoritePokemonName2,
  getPokemonsByIdsNotFoundRequest,
  getPokemonsByIdsRequest,
} from "./__mocks__/favorites-list";
import { messages } from "@/messages/en";

describe("FavoritesList", () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([1, 2]));
  });

  it("should render loading state", () => {
    render(
      <MockedProvider mocks={getPokemonsByIdsRequest} addTypename={false}>
        <FavoritesList />
      </MockedProvider>
    );

    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("should render error state", async () => {
    render(
      <MockedProvider
        mocks={[
          {
            ...getPokemonsByIdsRequest[0],
            error: new Error("Error"),
          },
        ]}
        addTypename={false}
      >
        <FavoritesList />
      </MockedProvider>
    );

    const errorState = await screen.findByText(
      messages.favoritesList.errorState.searchError
    );

    expect(errorState).toBeInTheDocument();
  });

  it("should render empty idle state", async () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));

    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <FavoritesList />
      </MockedProvider>
    );

    const emptyStateIdle = await screen.findByText(
      messages.favoritesList.emptyState.idle
    );

    expect(emptyStateIdle).toBeInTheDocument();
  });

  it("should render empty not-found state", async () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([0]));

    render(
      <MockedProvider
        mocks={[getPokemonsByIdsNotFoundRequest]}
        addTypename={false}
      >
        <FavoritesList />
      </MockedProvider>
    );

    const emptyStateNotFound = await screen.findByText(
      messages.favoritesList.emptyState.notFound
    );

    expect(emptyStateNotFound).toBeInTheDocument();
  });

  it("should render list of Favorites", async () => {
    render(
      <MockedProvider mocks={getPokemonsByIdsRequest} addTypename={false}>
        <FavoritesList />
      </MockedProvider>
    );

    const favoritePokemon1 = await screen.findByText(favoritePokemonName1);
    const favoritePokemon2 = await screen.findByText(favoritePokemonName2);

    expect(favoritePokemon1).toBeInTheDocument();
    expect(favoritePokemon2).toBeInTheDocument();
  });
});
