/*
  # Create inquiries table for contact form submissions

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact name
      - `email` (text, required) - Work email
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `industry` (text, required) - Business industry
      - `team_size` (text, required) - Current team size
      - `challenges` (text, required) - Description of challenges
      - `services` (text[], required) - Array of selected services
      - `budget` (text, required) - Budget range
      - `timeline` (text, required) - Project timeline
      - `additional_info` (text, optional) - Additional details
      - `status` (text) - Inquiry status (new, contacted, closed)
      - `created_at` (timestamptz) - Submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for anonymous users to insert inquiries (public form submission)
    - No select/update/delete for anonymous users (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  industry text NOT NULL,
  team_size text NOT NULL,
  challenges text NOT NULL,
  services text[] NOT NULL DEFAULT '{}',
  budget text NOT NULL,
  timeline text NOT NULL,
  additional_info text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
