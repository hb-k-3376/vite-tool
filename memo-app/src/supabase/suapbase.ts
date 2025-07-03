import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// createClient 을 진입점으로 초기화 하여 여러가지 기능들을 사용할 수 있게 한다.
export const supabase = createClient(supabaseUrl, supabaseKey);
