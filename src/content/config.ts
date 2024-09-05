import { defineCollection, } from 'astro:content';
//import { z } from 'astro:schema';
import { docsSchema } from '@astrojs/starlight/schema';
import { General, SkillBook } from '../schemas';

const skillBooks = defineCollection({
	loader: async () => {
    const response = await fetch("http://localhost:5000/skillbook/list/details");
    const data = await response.json();
    // Must return an array of entries with an id property,
    // or an object with IDs as keys and entries as values
    return data.map((book: SkillBook) => ({
      ...book,
    }));
  },
});

const generals = defineCollection({
	loader: async () => {
    const response = await fetch("http://localhost:5000/generals/details?verbose=true&level=1&stars=5&ascendingLevel=5Red&speciality45=Gold&speciality2=Gold&speciality3=Gold&speciality4=Gold");
    const data = await response.json();
    // Must return an array of entries with an id property,
    // or an object with IDs as keys and entries as values
    return data.map((general: General) => ({
      ...general,
    }));
  },
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
  generals, 
  skillBooks
};
