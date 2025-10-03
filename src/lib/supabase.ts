import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Thought {
  id: string;
  job_number: number;
  text: string;
  size: number;
  position_x: number;
  position_y: number;
  velocity_x: number;
  velocity_y: number;
  is_backup: boolean;
  created_at: string;
}

export interface Note {
  id: string;
  content: string;
  updated_at: string;
}
