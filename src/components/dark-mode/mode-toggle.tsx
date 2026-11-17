import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/dark-mode/theme-provider';
import { cn } from 'cn';

type ToggleProps = {
  iconSize?: number;
  iconColor?: string;
  btnVariant?:
    | 'link'
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'destructive'
    | null
    | undefined;
  btnClass?: string;
};

export function ModeToggle({
  iconSize = 3,
  iconColor = 'text-primary',
  btnVariant = 'default',
  btnClass,
}: ToggleProps) {
  const { setTheme, theme } = useTheme();

  const icon =
    theme === 'dark' ? (
      <Sun className={cn(`size-${iconSize} ${iconColor}`)} />
    ) : (
      <Moon className={cn(`size-${iconSize} ${iconColor}`)} />
    );

  return (
    <Button
      variant={btnVariant}
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      className={cn(
        'h-6 px-1.5 rounded-xs text-card/90 flex gap-0.5 border border-card/30',
        btnClass,
      )}
    >
      {icon}
    </Button>
  );
}
