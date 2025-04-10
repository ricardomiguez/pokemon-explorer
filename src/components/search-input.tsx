"use client";

import { messages } from "@/messages/en";
import { Form, Input, Kbd, Spinner } from "@heroui/react";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useTransition } from "react";

interface SearchInputProps {
  searchParamsKey: string;
  searchParamsValue: string;
}

export const SearchInput = ({
  searchParamsKey,
  searchParamsValue,
}: Readonly<SearchInputProps>) => {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [searchInputValue, setSearchInputValue] = useState(searchParamsValue);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(() => {
      router.replace(
        `?${createQueryString(searchParamsKey, searchInputValue)}`,
        {
          scroll: false,
        }
      );
    });
  };

  return (
    <Form onSubmit={handleSearch}>
      <div className="w-full scflex gap-2">
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["enter"]} />
          }
          labelPlacement="outside"
          placeholder={messages.searchInput.placeholder}
          disabled={isPending}
          startContent={
            !isPending ? (
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            ) : (
              <Spinner className="px-0.5" size="sm" />
            )
          }
          type="search"
          value={searchInputValue}
          onValueChange={setSearchInputValue}
        />
      </div>
    </Form>
  );
};
