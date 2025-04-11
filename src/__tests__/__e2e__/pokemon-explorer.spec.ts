import { messages } from "@/messages/en";
import { test, expect } from "@playwright/test";

test("should successfully search for an Pokémon by an existing Pokémon name", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Bulbasaur");
  await searchInput.press("Enter");

  const pokemonCard = page.getByRole("heading", { name: "Bulbasaur" });

  await expect(pokemonCard).toBeVisible();
});

test("should successfully search for an Pokémon by an existing Pokémon type", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Grass");
  await searchInput.press("Enter");

  const pokemonCard = page.getByRole("heading", { name: "Bulbasaur" });

  await expect(pokemonCard).toBeVisible();
});

test("should unsuccessfully search for an Pokémon by an unexisting Pokémon name or type", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Any");
  await searchInput.press("Enter");

  const emptyStateNotFound = page.getByText(
    messages.pokemonList.emptyState.notFound
  );

  await expect(emptyStateNotFound).toBeVisible();
});

test("should successfully add a Pokémon to favorites when the favorite button is clicked", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Bulbasaur");
  await searchInput.press("Enter");

  const pokemonCard = page.getByRole("heading", { name: "Bulbasaur" });

  await expect(pokemonCard).toBeVisible();

  const buttonFavorite = page.getByRole("button", { name: "Favorite" });
  const heartIcon = buttonFavorite.locator("svg");

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-gray-400 fill-gray-400"
  );

  await buttonFavorite.click();

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-red-500 fill-red-500"
  );
});

test("should successfully remove a Pokémon from favorites when the favorite button is clicked", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Bulbasaur");
  await searchInput.press("Enter");

  const pokemonCard = page.getByRole("heading", { name: "Bulbasaur" });

  await expect(pokemonCard).toBeVisible();

  const buttonFavorite = page.getByRole("button", { name: "Favorite" });
  const heartIcon = buttonFavorite.locator("svg");

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-gray-400 fill-gray-400"
  );

  await buttonFavorite.click();

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-red-500 fill-red-500"
  );

  await buttonFavorite.click();

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-gray-400 fill-gray-400"
  );
});

test("should successfully show a Pokémon in favorites page after successfully add Pokémon to favorites", async ({
  page,
}) => {
  await page.goto("/pokemon", { waitUntil: "networkidle" });

  const searchInput = page.getByRole("searchbox", { name: "Search" });

  await searchInput.fill("Bulbasaur");
  await searchInput.press("Enter");

  const pokemonCard = page.getByRole("heading", { name: "Bulbasaur" });

  await expect(pokemonCard).toBeVisible();

  const buttonFavorite = page.getByRole("button", { name: "Favorite" });
  const heartIcon = buttonFavorite.locator("svg");

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-gray-400 fill-gray-400"
  );

  await buttonFavorite.click();

  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-red-500 fill-red-500"
  );

  await page.goto("/favorites", { waitUntil: "networkidle" });

  await expect(pokemonCard).toBeVisible();
  await expect(heartIcon).toHaveClass(
    "lucide lucide-heart text-red-500 fill-red-500"
  );
});
