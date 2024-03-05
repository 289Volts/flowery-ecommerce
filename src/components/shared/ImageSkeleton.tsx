import { Skeleton } from "@/components/ui/skeleton";

type TImageSkeletonProps = {
  className?: string;
};
export const ImageSkeleton = ({ className }: TImageSkeletonProps) => {
  return (
    <Skeleton
      className={`${className} min-h-[155px] h-full w-full min-w-[155px] rounded-sm`}
    />
  );
};
