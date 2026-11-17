import type { DashboardBtnProps } from '@/constants/chart.data';
import { cn } from 'cn';
import { Link } from 'react-router-dom';

const DashboardBtn = ({
  title,
  subtitle,
  link = '#',
  icon: Icon,
  iconColor,
  btnBg,
  borderColor,
}: DashboardBtnProps) => {
  return (
    <Link to={link}>
      <div
        className={cn(
          `p-4 ${btnBg} ${borderColor} flex items-center rounded-sm gap-4`,
        )}
      >
        <div className="col-span-1 flex flex-row justify-end items-center">
          <div className="w-full max-w-10">
            <Icon className={cn(`w-6 h-6 ${iconColor}`)} />
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-0.5">
          <div
            className={cn(
              `text-[13px] font-bold ${iconColor} font-inter tracking-wider pl-0.5`,
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              `text-[11px] font-light italic ${iconColor} font-inter tracking-widest pl-0.5`,
            )}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default DashboardBtn;
