import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MdInfoOutline } from 'react-icons/md';

// To show bullet points, concat instructions with pipe '|'

type PopoverProps = {
  instructions: string;
  icon?: React.ReactNode;
};

const AppPopover = ({ instructions, icon }: PopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger className={'cursor-pointer text-primary'}>
        {icon ? icon : <MdInfoOutline />}
      </PopoverTrigger>
      <PopoverContent tabIndex={-1} className="w-auto max-w-80 rounded-xs">
        <div className="space-y-2">
          <h4 className="font-medium text-xs leading-none">Note:</h4>
          <ol className="grid gap-y-1 list-disc list-outside pl-4">
            {instructions.split('|').map((i) => (
              <li className="text-xs text-muted-foreground">{i}</li>
            ))}
          </ol>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default AppPopover;
