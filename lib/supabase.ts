import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pfxkojyyrotiaprauqgf.supabase.co" 
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeGtvanl5cm90aWFwcmF1cWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MTEwNDIsImV4cCI6MjA0NTE4NzA0Mn0.SiZ-V6BYUgWWkUGph9YZKqI0YxtDQGB-zyphkO9lMOE" 

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})