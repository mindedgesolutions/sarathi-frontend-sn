import { Skeleton } from '@/components/ui/skeleton';

const AppCheckAuthSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <span className="font-roboto tracking-widest text-sm font-semibold text-primary">
        Checking session ...
      </span>
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-62.5" />
          <Skeleton className="h-4 w-50" />
        </div>
      </div>
    </div>
  );
};
export default AppCheckAuthSkeleton;
