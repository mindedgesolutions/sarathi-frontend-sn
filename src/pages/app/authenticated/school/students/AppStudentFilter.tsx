import { AppFormSkeleton, FormDatepicker, FormSelect } from '@/components';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { appIcons } from '@/constants';
import type {
  IApplicationStatus,
  ICategory,
  IGender,
} from '@/interface/masters.interface';
import type { StudentSearchSchema } from '@/schema/search.schema';
import {
  useApplicationStatus,
  useCategories,
  useGenders,
} from '@/tanstack/master/master.query';
import { formatDropdownOptions, parseDateParam } from '@/utils/functions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const AppStudentFilter = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const { data: applicationStatus, isLoading: applicationLoading } =
    useApplicationStatus() as {
      data: IApplicationStatus[];
      isLoading: boolean;
    };

  const applicationStatusAll = formatDropdownOptions(
    applicationStatus,
    'status_code',
    'status_desc',
  );

  // -----------------------

  const { data: genders, isLoading: genderLoading } = useGenders() as {
    data: IGender[];
    isLoading: boolean;
  };

  const genderAll = formatDropdownOptions(genders, 'code', 'description');

  // -----------------------

  const { data: categories, isLoading: categoryLoading } = useCategories() as {
    data: ICategory[];
    isLoading: boolean;
  };

  const categoryAll = formatDropdownOptions(categories, 'code', 'description');

  // -----------------------

  const { ...form } = useForm<StudentSearchSchema>({
    defaultValues: {
      applicationStatus: searchParams.get('status') ?? '',
      gender: searchParams.get('gender') ?? '',
      category: searchParams.get('category') ?? '',
      dobStart: parseDateParam(searchParams.get('start')) ?? null,
      dobEnd: parseDateParam(searchParams.get('end')) ?? null,
    },
  });
  const dobStart = form.watch('dobStart');
  const dobEnd = form.watch('dobEnd');

  // -----------------------

  const reset = () => {
    form.reset({
      applicationStatus: '',
      gender: '',
      category: '',
      dobStart: null,
      dobEnd: null,
    });
    navigate(`/school/students`);
  };

  // -----------------------

  const handleSubmit = (data: StudentSearchSchema) => {
    data.applicationStatus &&
      searchParams.set('status', data.applicationStatus);

    data.category && searchParams.set('category', data.category);

    data.gender && searchParams.set('gender', data.gender);

    data.dobStart &&
      searchParams.set('start', format(data.dobStart, 'dd/MM/yyyy'));

    data.dobEnd && searchParams.set('end', format(data.dobEnd, 'dd/MM/yyyy'));

    setToggle(false);
    navigate(`/school/students?${searchParams.toString()}`);
  };

  return (
    <Dialog open={toggle} onOpenChange={setToggle}>
      <DialogTrigger
        render={
          <Button onClick={() => setToggle(true)}>
            <appIcons.advancedSearch />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-160">
        <DialogHeader>
          <DialogTitle>Advanced filters</DialogTitle>
        </DialogHeader>
        {applicationLoading || genderLoading || categoryLoading ? (
          <AppFormSkeleton />
        ) : (
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid grid-cols-2 py-4 gap-4">
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="applicationStatus">Application status</Label>
                <FormSelect
                  control={form.control}
                  name="applicationStatus"
                  options={applicationStatusAll}
                  placeholder="Select application status"
                  className="min-w-56"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="gender">Select gender</Label>
                <FormSelect
                  control={form.control}
                  name="gender"
                  options={genderAll}
                  placeholder="Select applicant gender"
                  className="min-w-56"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="category">Select category</Label>
                <FormSelect
                  control={form.control}
                  name="category"
                  options={categoryAll}
                  placeholder="Select applicant category"
                  className="min-w-56"
                />
              </div>
              <div className=""></div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="dobStart">Date of Birth Start</Label>
                <FormDatepicker
                  control={form.control}
                  name="dobStart"
                  allowFutureDates={false}
                  maxDate={dobEnd ?? undefined}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="dobEnd">Date of Birth End</Label>
                <FormDatepicker
                  control={form.control}
                  name="dobEnd"
                  allowFutureDates={false}
                  minDate={dobStart ?? undefined}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Filter data</Button>
              <Button variant={'outline'} type="button" onClick={reset}>
                Reset Filters
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default AppStudentFilter;
