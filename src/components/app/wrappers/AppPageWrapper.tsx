import { cn } from 'cn';

const AppPageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('p-1 md:p-4 py-1.5 md:py-4', className)}>{children}</div>
  );
};
export default AppPageWrapper;
