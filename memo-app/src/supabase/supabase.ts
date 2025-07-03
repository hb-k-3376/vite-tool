import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// vite에서 환경변수를 사용하는 방법은 import.meta.env를 사용하면 된다.
// 인텔리센스를 사용하려면 vite-env.d.ts에 ImportMetaEnv 설정을 해주면 된다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// createClient 을 진입점으로 초기화 하여 여러가지 기능들을 사용할 수 있게 한다.
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
