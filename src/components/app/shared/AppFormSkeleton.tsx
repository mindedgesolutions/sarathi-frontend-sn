import { Skeleton } from '@/components/ui/skeleton';
import { cn } from 'cn';

const AppFormSkeleton = ({
  count = 6,
  gridCol = 2,
}: {
  count?: number;
  gridCol?: number;
}) => {
  const arr = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div className={cn('grid py-4 gap-4', `grid-cols-${gridCol}`)}>
      {arr.map((index) => (
        <SkeletonComponent key={index} />
      ))}
    </div>
  );
};
export default AppFormSkeleton;

const SkeletonComponent = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className={cn('h-4 max-w-30', className)} />
      <Skeleton className={cn('h-6 min-w-50', className)} />
    </div>
  );
};
