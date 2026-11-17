import { validNumber } from '@/utils/format.validations';
import z from 'zod';

export const studentSchema = z
  .object({
    name: z
      .string()
      .nonempty('Name is required')
      .min(3, 'Name cannot be less than 3 characters')
      .max(250, 'Name cannot be less than 3 characters'),
    guardianName: z
      .string()
      .nonempty(`Guardian's name is required`)
      .min(3, `Guardian's name cannot be less than 3 characters`)
      .max(250, `Guardian's name cannot be less than 3 characters`),
    relationship: z.string().nonempty('Relationship is required'),
    dob: z.coerce.date().optional(),
    gender: z.string().nonempty('Gender is required'),
    caste: z.string().nonempty('Caste is required'),
    religion: z.string().nonempty('Religion is required'),
    board: z.string().nonempty('Board / Council is required'),
    classMaster: z.string().nonempty('Class is required'),
    section: z
      .string()
      .max(250, 'Section cannot be more than 250 characters')
      .nonempty('Section is required'),
    rollNo: z.string().nonempty('Roll no. is required'),
    registrationNo: z.string().optional(),
    localityRoad: z
      .string()
      .max(250, 'Locality / Road cannot be more than 250 characters')
      .optional(),
    cityTown: z
      .string()
      .nonempty('City / Town / Village is required')
      .max(250, 'City / Town / Village cannot be more than 250 characters'),
    postOffice: z.string().nonempty('Post office is required'),
    district: z.string().nonempty('District is required'),
    block: z.string().nonempty('Block is required'),
    policeStation: z.string().nonempty('Police station is required'),
    pincode: z.string().nonempty('PIN code is required'),
  })
  .superRefine((data, ctx) => {
    const { dob, pincode } = data;

    if (!dob) {
      ctx.addIssue({
        code: 'custom',
        path: ['dob'],
        message: 'Date of birth is required',
      });
    }

    if (pincode) {
      if (!validNumber(pincode, 6)) {
        ctx.addIssue({
          code: 'custom',
          path: ['pincode'],
          message: 'PIN code must be a 6 digit number',
        });
      }
    }
  });
export type StudentSchemaInput = z.input<typeof studentSchema>;
export type StudentSchemaOutput = z.output<typeof studentSchema>;
