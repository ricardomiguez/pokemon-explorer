"use client";

import { Pokemon } from "@/shared/graphql/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  cn,
  Image,
} from "@heroui/react";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface PokemonCardProps {
  pokemon: Pokemon | undefined;
  className?: string;
}

export const PokemonCard = ({
  pokemon,
  className,
}: Readonly<PokemonCardProps>) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemon") || "[]"
    );
    setIsFavorite(favorites.includes(pokemon?.id));
  }, [pokemon?.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favoritePokemon") || "[]"
    );

    let updatedFavorites;

    if (favorites.includes(pokemon?.id)) {
      updatedFavorites = favorites.filter((id: number) => id !== pokemon?.id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, pokemon?.id];
      setIsFavorite(true);
    }

    localStorage.setItem("favoritePokemon", JSON.stringify(updatedFavorites));
  };

  return (
    <Card
      className={cn(
        "space-y-5 p-4 h-[256px] justify-start animate-reveal",
        className
      )}
      radius="lg"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={pokemon?.name}
          radius="sm"
          shadow="sm"
          src={pokemon?.pokemon_v2_pokemonsprites[0].sprites.front_default}
          width="100%"
          height="96px"
          className="object-contain"
        />
      </CardBody>
      <CardFooter className="p-0 mt-4 flex flex-col gap-4 justify-between items-start h-full">
        <h4 className="px-3 font-bold text-lg capitalize">{pokemon?.name}</h4>
        <div className="flex justify-between w-full items-end">
          <div className="flex flex-col gap-1 w-full -pl-1">
            {pokemon?.pokemon_v2_pokemontypes.map((type, index) => (
              <Chip key={index} className="text-xs rounded-full capitalize">
                {type.pokemon_v2_type.name}
              </Chip>
            ))}
          </div>
          <Button
            isIconOnly
            aria-label="Like"
            className={`h-7 ${isFavorite ? "bg-pink-100" : "bg-white"}`}
            onClick={toggleFavorite}
          >
            <HeartIcon
              className={
                isFavorite
                  ? "text-red-500 fill-red-500"
                  : "text-gray-400 fill-gray-400"
              }
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
