import { z } from 'astro:schema';

const ASCENDINGVALUES = [
  'None',
  '1Purple',
  '2Purple',
  '3Purple',
  '4Purple',
  '5Purple',
  '1Red',
  '2Red',
  '3Red',
  '4Red',
  '5Red'
] as const;

export const AscendingLevels = z.enum(ASCENDINGVALUES);

export type AscendingLevels = z.infer<typeof AscendingLevels>;

export const GeneralOptions = z.object({
  'ascending-level': AscendingLevels.optional()
})

export type GeneralOptions = z.infer<typeof GeneralOptions>;

export const primaryGeneralOptions = z.object({
  'primary-ascending-level': z.string()
});

export type primaryGeneralOptions = z.infer<typeof primaryGeneralOptions>;

