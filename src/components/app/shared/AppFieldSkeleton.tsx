import { Skeleton } from '@/components/ui/skeleton';
import { cn } from 'cn';

const AppFieldSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className={cn('h-6 min-w-50', className)} />
    </div>
  );
};
export default AppFieldSkeleton;
