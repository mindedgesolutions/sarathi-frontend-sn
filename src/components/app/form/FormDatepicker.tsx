import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldDescription } from '@/components/ui/field';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from 'cn';
import { useState } from 'react';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';

type RHFFormDatepickerProps<T extends FieldValues> = {
  id?: string;
  name: Path<T>;
  control: Control<T>;
  description?: string;
  allowFutureDates?: boolean;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
};

const FormDatepicker = <T extends FieldValues>({
  id,
  name,
  control,
  description,
  allowFutureDates = true,
  className,
  minDate,
  maxDate,
}: RHFFormDatepickerProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Field className={cn('mx-auto w-full', className)}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => {
            // console.log('Controller field value:', field.value);
            // console.log('Controller field name:', field.name);

            return (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                  render={
                    <Button
                      variant="outline"
                      id={id}
                      className="w-full justify-start font-normal text-sm text-muted-foreground hover:text-muted-foreground"
                    >
                      {field.value
                        ? new Date(field.value).toLocaleDateString('en-GB')
                        : 'Select date'}
                    </Button>
                  }
                />
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value ?? undefined}
                    defaultMonth={field.value ?? minDate ?? new Date()}
                    captionLayout="dropdown"
                    timeZone="Asia/Kolkata"
                    onSelect={(date: any) => {
                      field.onChange(date);
                      setOpen(false);
                    }}
                    disabled={(date: any) => {
                      const isBeforeMinDate = minDate && date < minDate;
                      const isAfterMaxDate = maxDate && maxDate < date;
                      const isFutureDate =
                        !allowFutureDates && date > new Date();

                      return Boolean(
                        isBeforeMinDate || isFutureDate || isAfterMaxDate,
                      );
                    }}
                  />
                </PopoverContent>
              </Popover>
            );
          }}
        />
        {description && (
          <FieldDescription className="text-destructive text-xs">
            {description}
          </FieldDescription>
        )}
      </Field>
    </>
  );
};
export default FormDatepicker;
