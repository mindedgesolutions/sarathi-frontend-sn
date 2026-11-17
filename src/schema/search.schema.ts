import z from 'zod';

export const quickSearchSchema = z.object({
  search: z.string().optional(),
});
export type QuickSearchSchema = z.infer<typeof quickSearchSchema>;

// -------------------

export const studentSearchSchema = z.object({
  applicationStatus: z.string().optional(),
  gender: z.string().optional(),
  category: z.string().optional(),
  dobStart: z.coerce.date().nullable().optional(),
  dobEnd: z.coerce.date().nullable().optional(),
});
export type StudentSearchSchema = z.infer<typeof studentSearchSchema>;
