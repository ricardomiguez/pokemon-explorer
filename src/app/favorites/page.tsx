import { FavoritesList } from "@/components/favorites-list";
import { messages } from "@/messages/en";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: messages.favoritesList.title,
};

export default function FavoritesPage() {
  return (
    <>
      <div className="flex justify-center py-2">
        <h1 className="font-bold text-inherit">
          {messages.favoritesList.title}
        </h1>
      </div>
      <FavoritesList />
    </>
  );
}
