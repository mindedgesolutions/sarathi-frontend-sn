import { cn } from 'cn';

const AppSectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('mt-4', className)}>{children}</div>;
};
export default AppSectionWrapper;
