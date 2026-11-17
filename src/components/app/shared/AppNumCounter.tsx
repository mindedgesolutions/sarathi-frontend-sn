import { NumberTicker } from '@/components/ui/number-ticker';
import { cn } from 'cn';

type NumCounterProps = {
  title: string;
  count: number;
  icon: React.ElementType;
  className?: string;
  iconColor?: string;
  iconBg?: string;
};

const AppNumCounter = ({
  title,
  count,
  icon: Icon,
  className,
  iconColor,
  iconBg,
}: NumCounterProps) => {
  return (
    <div
      key={title}
      className={cn(
        'p-4 bg-muted/70 hover:bg-muted-foreground/10 grid grid-cols-4 rounded-sm',
        className,
      )}
    >
      <div className="col-span-3 flex flex-col gap-6">
        <NumberTicker
          value={Number(count)}
          delay={0.3}
          startValue={Number(count) > 30 ? Number(count) - 30 : 0}
          className="text-xl md:text-3xl tracking-wide font-semibold text-muted-foreground font-roboto"
        />
        <div className="text-xs text-primary font-inter tracking-wider pl-0.5">
          {title}
        </div>
      </div>
      <div className="col-span-1 flex flex-row justify-end items-center">
        <div className={cn('w-full p-5 rounded-full', iconBg ?? 'bg-card/50')}>
          <span className="w-full h-8">
            <Icon
              className={cn(
                'mr-2 w-full h-full object-cover',
                iconColor ?? 'text-primary/70',
              )}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default AppNumCounter;
