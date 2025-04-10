import { Card, cn, Skeleton } from "@heroui/react";

interface LoadingStateProps {
  className?: string;
}

export const LoadingState = ({ className }: Readonly<LoadingStateProps>) => {
  return (
    <Card
      className={cn("space-y-5 p-4 h-[256px]", className)}
      radius="lg"
      aria-label="loading"
    >
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
};
