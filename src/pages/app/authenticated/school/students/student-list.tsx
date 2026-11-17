import {
  AppPageWrapper,
  AppSectionWrapper,
  AppTitleWrapper,
  FormInput,
} from '@/components';
import { titles } from '@/constants';
import type { QuickSearchSchema } from '@/schema/search.schema';
import { useForm } from 'react-hook-form';
import { appIcons } from '@/constants';
import AppStudentFilter from './AppStudentFilter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const instructions =
  'This list shows all students|Student list filter|Student list export to excel|Student list export to PDF';

const AppStudentList = () => {
  document.title = `List of Students | ${titles.projectName}`;

  const { ...form } = useForm<QuickSearchSchema>({
    defaultValues: { search: '' },
  });

  return (
    <AppPageWrapper>
      <AppTitleWrapper title="List of Students" instructions={instructions} />
      <AppSectionWrapper>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link to={`/school/student`}>
              <Button>Add student</Button>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <FormInput
              name="search"
              register={form.register}
              placeholder="Search by name ..."
              iconStart={<appIcons.search />}
              className="min-w-40"
            />
            <AppStudentFilter />
          </div>
        </div>
      </AppSectionWrapper>
    </AppPageWrapper>
  );
};
export default AppStudentList;
