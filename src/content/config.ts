import { defineCollection, } from 'astro:content';
//import { z } from 'astro:schema';
import { docsSchema } from '@astrojs/starlight/schema';
import { General, skillBook } from '../schemas';

export const skillBooks = defineCollection({
	loader: async () => {
    const response = await fetch("http://localhost:8080/skillbook/list/details?verbose");
    const data = await response.json();
    // Must return an array of entries with an id property,
    // or an object with IDs as keys and entries as values
    
    const mappedData: skillBook[] =  data.map((book: skillBook) => ({
      ...book,
    }));
    
    return mappedData.length ? mappedData : new Array<skillBook>();
  },
});

export const generals = defineCollection({
	loader: async () => {
    const response = await fetch("http://localhost:8080/general/list/details?verbose=true&level=1&stars=5&ascendingLevel=5Red&speciality45=Gold&speciality2=Gold&speciality3=Gold&speciality4=Gold");
    const data = await response.json();
    // Must return an array of entries with an id property,
    // or an object with IDs as keys and entries as values
    const mappedData: General[] = data.map((general: General) => ({
      ...general,
    }));
    return mappedData.length ? mappedData : new Array<General>();
  },
});

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
  generals, 
  skillBooks
};
