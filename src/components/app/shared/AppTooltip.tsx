import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { showLess } from '@/utils/functions';
import { cn } from 'cn';

type TooltipProps = {
  text: string;
  cropped?: string;
  cropLen?: number;
  className?: string;
};

const AppTooltip = ({
  text,
  cropped,
  cropLen = 20,
  className,
}: TooltipProps) => {
  const defaultCropped = cropped ? cropped : showLess(text, cropLen);

  return (
    <Tooltip>
      <TooltipTrigger className={cn(className)}>
        <span>{defaultCropped}</span>
      </TooltipTrigger>
      <TooltipContent align="start" className="max-w-80">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
export default AppTooltip;
