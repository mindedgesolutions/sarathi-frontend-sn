import { cn } from 'cn';
import { AppPopover } from '@/components';

type TitleWrapperProps = {
  title: string;
  className?: string;
  backgroundClassName?: string;
  instructions?: string;
  popicon?: React.ReactNode;
};

const AppSectionTitleWrapper = ({
  title,
  className,
  backgroundClassName,
  instructions,
  popicon,
}: TitleWrapperProps) => {
  return (
    <>
      <div
        className={cn(
          'p-1.5 md:p-3 px-1.5 md:px-0 flex gap-1.5 items-center text-xs md:text-lg tracking-wider font-bold font-inter',
          backgroundClassName,
        )}
      >
        <span className={cn('text-muted-foreground', className)}>{title}</span>
        {instructions && (
          <AppPopover icon={popicon} instructions={instructions} />
        )}
      </div>
    </>
  );
};
export default AppSectionTitleWrapper;
