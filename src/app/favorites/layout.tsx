interface FavoritesLayoutProps {
  children: React.ReactNode;
}

export default function FavoritesLayout({
  children,
}: Readonly<FavoritesLayoutProps>) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
