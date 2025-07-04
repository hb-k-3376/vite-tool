import { renderMemo } from '../card';
import { elements } from '../main';
import { gsap } from 'gsap';
import type { Tables } from '../supabase/database.types';
import { supabase } from '../supabase/supabase';

export const fetchMemo = async () => {
  const { data } = await supabase.from('memo').select().order('position', { ascending: true });

  elements.main.innerHTML = '';

  data &&
    data.forEach((memo) => {
      renderMemo(elements.main, memo);
    });
};

export const deleteMemo = async (id: number) => {
  const { error } = await supabase.from('memo').delete().eq('id', +id).select();
  fetchMemo();
  sortMemo();
};

export const insertMemo = async ({
  title,
  description,
  priority,
  position,
}: Pick<Tables<'memo'>, 'title' | 'description' | 'priority' | 'position'>) => {
  const { error } = await supabase.from('memo').insert({ title, description, priority, position });

  fetchMemo();

  const tl = gsap
    .timeline()
    .to('.pop', { y: '100%', ease: 'power3.inOut' })
    .to('#dialog', { autoAlpha: 0, duration: 0.2 });
};

export const sortMemo = () => {
  const sortedItems = document.querySelectorAll('article');

  console.log('하이');
  sortedItems.forEach(async (item, index) => {
    await supabase.from('memo').update({ position: index }).eq('id', +item.dataset.id!);
  });
};
