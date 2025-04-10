interface EmptyStateProps {
  description: string;
}

export const EmptyState = ({ description }: Readonly<EmptyStateProps>) => {
  return (
    <div className="mt-16">
      <span className="text-base text-default-400 flex h-full w-full items-center justify-center">
        {description}
      </span>
    </div>
  );
};
