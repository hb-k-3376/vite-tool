import { renderMemo } from '../card';
import { data } from '../data';
import { elements } from '../main';
import { supabase } from '../supabase/suapbase';

export const fetchMemo = (): void => {
  data.forEach((memo) => {
    renderMemo(elements.main, memo);
  });
};

console.log(supabase);
