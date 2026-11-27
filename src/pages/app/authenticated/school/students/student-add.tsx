import {
  AppPageWrapper,
  AppFormSkeleton,
  AppSectionWrapper,
  AppTitleWrapper,
  FormInput,
  FormSelect,
  FormDatepicker,
  FormRequired,
  AppSectionTitleWrapper,
  SubmitBtn,
  AppFieldSkeleton,
} from '@/components';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { titles } from '@/constants';
import type { IBlock, IDistrict } from '@/interface/masters.interface';
import type { IStudentAddMaster } from '@/interface/school.interface';
import {
  studentSchema,
  type StudentSchemaInput,
  type StudentSchemaOutput,
} from '@/schema/school.schema';
import { useBlocks, useDistricts } from '@/tanstack/master/master.query';
import { useStudentAddMasters } from '@/tanstack/school/school.query';
import { formatDropdownOptions } from '@/utils/functions';
import { zodResolver } from '@hookform/resolvers/zod';
import { subYears } from 'date-fns';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AppStudentAdd = () => {
  document.title = `Add Student | ${titles.appTitle}`;

  const minDob = subYears(new Date(), 14);

  const { data: masters, isLoading: masterLoading } =
    useStudentAddMasters() as { data: IStudentAddMaster; isLoading: boolean };

  const relationAll =
    masters &&
    formatDropdownOptions(masters.relationships, 'code', 'description');
  const genderAll =
    masters && formatDropdownOptions(masters.genders, 'code', 'description');
  const categoryAll =
    masters && formatDropdownOptions(masters.categories, 'code', 'description');
  const religionAll =
    masters && formatDropdownOptions(masters.religions, 'code', 'description');
  const boardAll =
    masters && formatDropdownOptions(masters.boards, 'code', 'description');

  // -----------------------

  const { data: districts, isLoading: districtLoading } = useDistricts() as {
    data: IDistrict[];
    isLoading: boolean;
  };

  const districtAll = formatDropdownOptions(
    districts,
    'dist_id_pk',
    'dist_name',
  );

  // -----------------------

  const {
    formState: { errors, isSubmitting },
    ...form
  } = useForm<StudentSchemaInput, any, StudentSchemaOutput>({
    defaultValues: {
      name: '',
      guardianName: '',
      relationship: '',
      dob: undefined,
      gender: '',
      caste: '',
      religion: '',
      board: '',
      classMaster: 'IX',
      section: '',
      rollNo: '',
      registrationNo: '',
      localityRoad: '',
      cityTown: '',
      postOffice: '',
      district: '',
      block: '',
      policeStation: '',
      pincode: '',
    },
    mode: 'all',
    resolver: zodResolver(studentSchema),
  });
  const district = form.watch('district');

  useEffect(() => {
    form.setValue('block', 'Select a block'); // Reset block
  }, [district, form]);

  // -----------------------

  const { data: blocks, isLoading: blockLoading } = useBlocks(district) as {
    data: IBlock[];
    isLoading: boolean;
  };

  const blockAll = formatDropdownOptions(blocks, 'block_id_pk', 'block_name');

  // -----------------------

  const reset = () => {
    form.reset({
      name: '',
      guardianName: '',
      relationship: '',
      dob: null,
      gender: '',
      caste: '',
      religion: '',
      board: '',
      classMaster: 'IX',
      section: '',
      rollNo: '',
      registrationNo: '',
      localityRoad: '',
      cityTown: '',
      postOffice: '',
      district: '',
      block: '',
      policeStation: '',
      pincode: '',
    });
  };

  // -----------------------

  const handleSubmit = async (data: StudentSchemaOutput) => {
    console.log(data);
  };

  return (
    <AppPageWrapper>
      <AppTitleWrapper title="Add new student" />
      <AppSectionWrapper>
        {masterLoading || districtLoading ? (
          <AppFormSkeleton count={20} gridCol={4} />
        ) : (
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <fieldset disabled={isSubmitting}>
              <AppSectionTitleWrapper
                title="Applicant details"
                className="text-xs text-card-foreground font-medium px-1 py-1.5 md:py-0 md:px-3"
                backgroundClassName="bg-muted rounded-xs mb-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Applicant's name <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="name"
                    id="name"
                    errorMsg={errors.name?.message}
                    placeholder={`Enter applicant's name`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="guardianName" className="mb-1">
                    Guardian's name <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="guardianName"
                    id="guardianName"
                    errorMsg={errors.guardianName?.message}
                    placeholder={`Enter guardian's name`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Select guardian's relationship <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="relationship"
                    options={relationAll}
                    placeholder="Select relationship"
                    description={errors.relationship?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Date of birth <FormRequired />
                  </Label>
                  <FormDatepicker
                    control={form.control}
                    name="dob"
                    allowFutureDates={false}
                    description={errors.dob?.message}
                    minDate={minDob}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Select gender <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="gender"
                    options={genderAll}
                    placeholder="Select gender"
                    description={errors.gender?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Select caste <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="caste"
                    options={categoryAll}
                    placeholder="Select caste"
                    description={errors.caste?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Select religion <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="religion"
                    options={religionAll}
                    placeholder="Select religion"
                    description={errors.religion?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Select board <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="board"
                    options={boardAll}
                    placeholder="Select board"
                    description={errors.board?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="name" className="mb-1">
                    Class
                  </Label>
                  <FormInput
                    register={form.register}
                    name="classMaster"
                    disabled
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="section" className="mb-1">
                    Enter section <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="section"
                    id="section"
                    placeholder="e.g. A, B, C etc."
                    errorMsg={errors.section?.message}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="rollNo" className="mb-1">
                    Enter roll no. <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="rollNo"
                    id="rollNo"
                    placeholder="Enter roll no."
                    errorMsg={errors.rollNo?.message}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="registrationNo" className="mb-1">
                    Enter registration no.
                  </Label>
                  <FormInput
                    register={form.register}
                    name="registrationNo"
                    id="registrationNo"
                    placeholder="Enter registration no."
                    errorMsg={errors.registrationNo?.message}
                  />
                </div>
              </div>
              <AppSectionTitleWrapper
                title="Contact information"
                className="text-xs text-card-foreground font-medium px-1 py-1.5 md:py-0 md:px-3"
                backgroundClassName="bg-muted rounded-xs my-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
                <div className="col-span-1 md:col-span-2 grid content-start gap-1">
                  <Label htmlFor="localityRoad" className="mb-1">
                    Premises no. & Locality / Road
                  </Label>
                  <FormInput
                    register={form.register}
                    name="localityRoad"
                    id="localityRoad"
                    errorMsg={errors.localityRoad?.message}
                    placeholder={`Enter premises no. & locality / road`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="cityTown" className="mb-1">
                    City / Town / Village <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="cityTown"
                    id="cityTown"
                    errorMsg={errors.cityTown?.message}
                    placeholder={`Enter City / Town / Village`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="postOffice" className="mb-1">
                    Post office <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="postOffice"
                    id="postOffice"
                    errorMsg={errors.postOffice?.message}
                    placeholder={`Enter post office`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="district" className="mb-1">
                    Select district <FormRequired />
                  </Label>
                  <FormSelect
                    control={form.control}
                    name="district"
                    options={districtAll}
                    placeholder="Select a district"
                    description={errors.district?.message}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="block" className="mb-1">
                    Select block <FormRequired />
                  </Label>
                  {blockLoading ? (
                    <AppFieldSkeleton className="h-8" />
                  ) : (
                    <FormSelect
                      control={form.control}
                      name="block"
                      options={blockAll}
                      placeholder="Select a block"
                      description={errors.block?.message}
                      disabled={isSubmitting}
                    />
                  )}
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="policeStation" className="mb-1">
                    Police station <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="policeStation"
                    id="policeStation"
                    errorMsg={errors.policeStation?.message}
                    placeholder={`Enter police station`}
                  />
                </div>
                <div className="grid content-start gap-1">
                  <Label htmlFor="pincode" className="mb-1">
                    PIN code <FormRequired />
                  </Label>
                  <FormInput
                    register={form.register}
                    name="pincode"
                    id="pincode"
                    errorMsg={errors.pincode?.message}
                    placeholder={`Enter PIN code`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-8 gap-x-4 gap-y-4">
                <div className="flex gap-4 justify-center md:justify-end">
                  <SubmitBtn
                    isSubmitting={isSubmitting}
                    label="Add Student"
                    submitLabel="Submitting ..."
                  />
                  <Button variant={'outline'} type="button" onClick={reset}>
                    Reset Filters
                  </Button>
                  <Link to={`/school/students`}>
                    <Button variant={'outline'} type="button">
                      Back to List
                    </Button>
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
        )}
      </AppSectionWrapper>
    </AppPageWrapper>
  );
};
export default AppStudentAdd;
