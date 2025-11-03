/*
  # Fix Function Search Path Security Issue

  1. Changes
    - Update `update_updated_at_column` function to use a secure search_path
    - This prevents potential SQL injection through search_path manipulation
    
  2. Security
    - Set search_path explicitly in function definition
    - Prevents role mutable search_path vulnerability
*/

-- Drop and recreate the function with secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = '';
