import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { PokemonCard } from "@/components/pokemon-card";
import {
  pokemon,
  pokemonId,
  pokemonImage,
  pokemonName,
  pokemonType,
} from "./__mocks__/pokemon-card";

describe("PokemonCard", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render the Pokemon's name, image and type", () => {
    render(<PokemonCard pokemon={pokemon} />);

    expect(screen.getByText(pokemonName)).toBeInTheDocument();
    expect(screen.getByAltText(pokemonName)).toHaveAttribute(
      "src",
      pokemonImage
    );
    expect(screen.getByText(pokemonType)).toBeInTheDocument();
  });

  it("should show a red heart icon if the Pokémon is in favorites", () => {
    localStorage.setItem("favoritePokemonIds", JSON.stringify([pokemonId]));

    render(<PokemonCard pokemon={pokemon} />);

    const heartIcon = screen
      .getByRole("button", { name: "Favorite" })
      .querySelector("svg");

    expect(heartIcon).toHaveClass("fill-red-500");
  });

  it("should show a gray heart icon if the Pokémon is not in favorites", () => {
    localStorage.setItem("favoritePokemonIds", JSON.stringify([]));

    render(<PokemonCard pokemon={pokemon} />);

    const heartIcon = screen
      .getByRole("button", { name: "Favorite" })
      .querySelector("svg");

    expect(heartIcon).toHaveClass("fill-gray-400");
  });

  it("should add Pokémon to favorites on button click when not favorited", async () => {
    localStorage.setItem("favoritePokemonIds", JSON.stringify([]));

    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    render(<PokemonCard pokemon={pokemon} />);

    const button = screen.getByRole("button", { name: "Favorite" });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      "favoritePokemonIds",
      JSON.stringify([pokemonId])
    );
  });

  it("should remove Pokémon from favorites on button click when already favorited", async () => {
    localStorage.setItem("favoritePokemonIds", JSON.stringify([pokemonId]));

    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    render(<PokemonCard pokemon={pokemon} />);

    const button = screen.getByRole("button", { name: "Favorite" });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(setItemSpy).toHaveBeenCalledWith(
      "favoritePokemonIds",
      JSON.stringify([])
    );
  });
});
