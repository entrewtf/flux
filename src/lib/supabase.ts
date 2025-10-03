import { createClient } from '@supabase/supabase-js';

const supabaseUrl=import.meta.env.VITE_SUPABASE_URL||'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseAnonKey=import.meta.env.VITE_SUPABASE_ANON_KEY||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

export const supabase=createClient(supabaseUrl,supabaseAnonKey);

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
