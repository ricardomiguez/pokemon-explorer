import { Alert } from "@heroui/react";

interface ErrorStateProps {
  description: string;
}

export const ErrorState = ({ description }: Readonly<ErrorStateProps>) => {
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center my-3">
          <Alert color="danger" description={description} />
        </div>
      </div>
    </div>
  );
};
