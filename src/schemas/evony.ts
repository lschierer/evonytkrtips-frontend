import {z} from 'astro:schema';

export const buffObject = z.object({
  'attribute':  z.string(),
  'class':      z.tuple([z.string(),z.array(z.string())]).optional(),
  'condition':  z.array(z.string()).optional(),
  'inherited':  z.boolean().optional(),
  'value':      z.object({
    'number':   z.number(),
    'unit':     z.string(),
  }),
});

export const specialityObject = z.object({
  'activeLevel':  z.string(),
  'name':         z.string(),
});

export const skillBookObject = z.object({
  'name':   z.string(),
  'buffs':  z.array(buffObject),
})

export const generalObject = z.object({
  'EvAnsScores': z.object({
    'AttackingAsPrimary': z.number(),
    'AttackingAsSecondary': z.number(),
  }),
  'ascendingAttributes': z.object({
    '5Red': z.array(buffObject).optional(),
    '4Red': z.array(buffObject).optional(),
    '3Red': z.array(buffObject).optional(),
    '2Red': z.array(buffObject).optional(),
    '1Red': z.array(buffObject).optional(),
    '5Purple': z.array(buffObject).optional(),
    '4Purple': z.array(buffObject).optional(),
    '3Purple': z.array(buffObject).optional(),
    '2Purple': z.array(buffObject).optional(),
    '1Purple': z.array(buffObject).optional(),
  }).optional(),
  'attack': z.number(),
  'defense': z.number(),
  'politics': z.number(),
  'leadership': z.number(),
  'attack_increment': z.number(),
  'defense_increment': z.number(),
  'politics_increment': z.number(),
  'leadership_increment': z.number(),
  'level': z.number(),
  'id': z.string(),
  'specialities': z.array(specialityObject),
  'builtInBook': skillBookObject,
  'otherBooks': z.array(skillBookObject).nullish(),
});

export type generalObject = z.infer<typeof generalObject>;