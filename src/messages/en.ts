export const messages = {
  navBar: {
    title: "Pokémon Explorer",
  },
  searchInput: {
    placeholder: "Search Pokémon by name or type",
  },
  pokemonList: {
    title: "Pokémon",
    emptyState: {
      idle: "Start your journey! Use the search to find Pokémon.",
      notFound: "Hmm... We couldn’t find any Pokémon matching your search.",
    },
    errorState: {
      searchError:
        "Oops! Something went wrong while searching. Please try again.",
    },
  },
  favoritesList: {
    title: "Favorites",
    emptyState: {
      idle: "You haven’t favorited any Pokémon yet. Add some to your favorites and they’ll appear here!",
      notFound:
        "We couldn’t find any favorite Pokémon. Try again later or add some to your favorites.",
    },
    errorState: {
      searchError:
        "Oops! Something went wrong while loading your favorites. Please refresh the page.",
    },
  },
};
