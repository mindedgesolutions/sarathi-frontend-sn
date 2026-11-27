import { Spinner } from '@/components/ui/spinner';
import { cn } from 'cn';

const AppSigningOffLoader = ({ show = false }: { show?: boolean }) => {
  return (
    <div
      className={cn(
        `fixed inset-0 z-50 bg-background/60
        flex flex-col gap-2 items-center justify-center
        ${show ? 'visible' : 'invisible pointer-events-none'}`,
      )}
    >
      <span className="font-roboto tracking-widest text-base font-semibold text-primary flex items-center gap-3">
        <Spinner className="size-5" />
        Signing off ...
      </span>
    </div>
  );
};
export default AppSigningOffLoader;
