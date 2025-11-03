/*
  # Create Secrets Table

  1. New Tables
    - `secrets`
      - `id` (uuid, primary key) - Unique identifier for each secret
      - `key_name` (text, unique) - Name/identifier for the API key (e.g., 'notion_api_key')
      - `key_value` (text) - The encrypted API key value
      - `description` (text, nullable) - Optional description of what this key is used for
      - `created_at` (timestamptz) - When the secret was created
      - `updated_at` (timestamptz) - When the secret was last updated
      - `created_by` (uuid, nullable) - User who created the secret (if using auth)
      
  2. Security
    - Enable RLS on `secrets` table
    - Add policy for service role only (secrets should not be accessible from client)
    - Regular authenticated users cannot access secrets table directly
    
  3. Important Notes
    - API keys should be encrypted before storing
    - Access to secrets should be done through Edge Functions using service role
    - Never expose secrets to the client side
*/

-- Create secrets table
CREATE TABLE IF NOT EXISTS secrets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key_name text UNIQUE NOT NULL,
  key_value text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid
);

-- Enable Row Level Security
ALTER TABLE secrets ENABLE ROW LEVEL SECURITY;

-- Create restrictive policy: NO client access
-- Only service role can access secrets (used in Edge Functions)
CREATE POLICY "Secrets are only accessible via service role"
  ON secrets
  FOR ALL
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- Create index on key_name for faster lookups
CREATE INDEX IF NOT EXISTS idx_secrets_key_name ON secrets(key_name);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_secrets_updated_at ON secrets;
CREATE TRIGGER update_secrets_updated_at
  BEFORE UPDATE ON secrets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
