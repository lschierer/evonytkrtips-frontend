import { defineCollection, } from 'astro:content';
//import { z } from 'astro:schema';
import { docsSchema } from '@astrojs/starlight/schema';
import { generalObject } from '../schemas';

/*
const generalEntry = z.object({
  'id': z.string(),
  'data': generalObject,
});

type generalEntryType = z.infer<typeof generalEntry>;
*/


const generals = defineCollection({
	loader: async () => {
    const response = await fetch("http://localhost:5000/generals/details");
    const data = await response.json();
    // Must return an array of entries with an id property,
    // or an object with IDs as keys and entries as values
    return data.map((general: generalObject) => ({
      ...general,
    }));
  },
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
  generals
};
