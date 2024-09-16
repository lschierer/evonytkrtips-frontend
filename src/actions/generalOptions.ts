import { defineAction } from 'astro:actions';

import { 
  AscendingLevels,
  GeneralOptions,
  primaryGeneralOptions 
} from '@schemas/generalForm';

export const primaryGeneral = {
  getOptions: defineAction({
    accept: 'form',
    input: primaryGeneralOptions,
    handler: async (input) => { 
      let returnable: GeneralOptions | undefined; 
      const pAcending = input['primary-ascending-level'];
      if(pAcending && pAcending.length >= 1) {
        const valid = AscendingLevels.safeParse(pAcending);
        if(valid.success) {
          returnable = {
            'ascending-level': valid.data
          }
        } 
      }
      if(returnable !== undefined) {
        return returnable;
      }
     },
  }),
};
