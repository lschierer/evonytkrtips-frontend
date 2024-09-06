import { z } from 'astro:schema';

export const Value = z.object({
  "number": z.number(),
  "unit": z.string(),
});
export type Value = z.infer<typeof Value>;

export const Aes = z.object({
  "Attack": z.number().optional(),
  "Overall": z.number(),
  "Toughness": z.number().optional(),
  "Preservation": z.number().optional(),
  "Unused": z.number().optional(),
});
export type Aes = z.infer<typeof Aes>;

export const Attack = z.object({
  "AES": z.number().optional(),
  "BAS": z.number(),
  "Overall": z.number(),
  "SBS": z.number().optional(),
});
export type Attack = z.infer<typeof Attack>;

export const Bas = z.object({
  "Attack": z.number(),
  "Defense": z.number(),
  "Leadershp": z.number(),
  "Overall": z.number(),
  "Politics": z.number(),
});
export type Bas = z.infer<typeof Bas>;

export const Cvs = z.object({
});
export type Cvs = z.infer<typeof Cvs>;

export const Unused = z.object({
  "SBS": z.number().optional(),
  "AES": z.number().optional(),
});
export type Unused = z.infer<typeof Unused>;

export const EvAnsScores = z.object({
  "AttackingAsPrimary": z.number(),
  "AttackingAsSecondary": z.number(),
  "MonsterAsPrimary": z.number(),
  "MonsterAsSecondary": z.number(),
});
export type EvAnsScores = z.infer<typeof EvAnsScores>;

export const Buff = z.object({
  "attribute": z.string(),
  "class": z.union([z.string(),z.array(z.string())]).optional(),
  "condition": z.array(z.string()).optional(),
  "inherited": z.number(),
  "value": Value,
});
export type Buff = z.infer<typeof Buff>;

export const Attacking = z.object({
  "AES": Aes,
  "Attack": Attack,
  "BAS": Bas,
  "CVS": Cvs,
  "Preservation": Attack,
  "SBS": Aes,
  "SPS": Cvs,
  "Toughness": Attack,
  "Unused": Unused.optional(),
});
export type Attacking = z.infer<typeof Attacking>;

export const Speciality = z.object({
  "Blue": z.array(Buff).optional(),
  "Gold": z.array(Buff).optional(),
  "Green": z.array(Buff).optional(),
  "Orange": z.array(Buff).optional(),
  "Purple": z.array(Buff).optional(),
  "activeLevel": z.number(),
  "name": z.string(),
});
export type Speciality = z.infer<typeof Speciality>;

export const ComponentScores = z.object({
  "Attacking": Attacking,
  "Monster": Attacking,
});
export type ComponentScores = z.infer<typeof ComponentScores>;

export const skillBook = z.object({
  "id":   z.string().optional(),
  "buffs": z.array(Buff).optional(),
  "name": z.string(),
  "text": z.union([z.null(), z.string()]),
});
export type skillBook = z.infer<typeof skillBook>;

export const General = z.object({
  "id": z.string(),
  "ComponentScores": ComponentScores,
  "EvAnsScores": EvAnsScores,
  "ascendingAttributes": z.record(z.string(), z.array(Buff)),
  "attack": z.number(),
  "attack_increment": z.number(),
  "builtInBook": skillBook,
  "defense": z.number(),
  "defense_increment": z.union([z.number(), z.string()]),
  "hasCovenant": z.boolean(),
  "name": z.string(),
  "leadership": z.number(),
  "leadership_increment": z.union([z.number(), z.string()]),
  "level": z.number(),
  "otherBooks": z.array(skillBook),
  "politics": z.number(),
  "politics_increment": z.union([z.number(), z.string()]),
  "specialities": z.array(Speciality),
});
export type General = z.infer<typeof General>;
