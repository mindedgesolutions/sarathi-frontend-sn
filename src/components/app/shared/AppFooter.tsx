import { useTheme } from '@/components/dark-mode/theme-provider';
import { titles } from '@/constants';
import { cn } from 'cn';

const AppFooter = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <div className={cn('bg-muted-foreground/20 p-4', className)}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-card-foreground tracking-wider">
            {titles.depName}
          </span>
          . All rights reserved
        </div>
        <div className="text-xs text-muted-foreground flex">
          <span>Created, powered & maintained by</span>
          <span className="text-card-foreground tracking-wider ml-0.5">
            National Informatics Center
          </span>
          {theme === 'dark' ? (
            <img src="/NIC_Logo_white.png" className="w-auto h-4 ml-1" />
          ) : (
            <img src="/NIC_Logo.png" className="w-auto h-4 ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};
export default AppFooter;
