declare interface ISuperHeroId {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  is_staff: boolean;
  is_active: boolean;
  is_accredited: boolean;
  is_issuer: boolean;
  is_admin: boolean;
  email: string;
  avatar: string | null;
  phone_number: string | null;
  terms_conditions: boolean;
  date_terms_conditions: Date | null;
  completed_profile: boolean;
}
