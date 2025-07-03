import { renderMemo } from '../card';
import { elements } from '../main';
import { supabase } from '../supabase/supabase';

export const fetchMemo = async () => {
  const { data, error } = await supabase.from('memo').select();

  if (error) return;

  data &&
    data.forEach((memo) => {
      renderMemo(elements.main, memo);
    });
};
