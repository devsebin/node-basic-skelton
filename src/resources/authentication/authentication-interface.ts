import { Document } from "mongoose";

interface IconUrl {
  imageUrl: string;
  thumbnailUrls: string[];
}

interface icon {
  name: string;
  url: IconUrl;
}

interface IBlockedBy extends Document {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: boolean;
  isDeleted: boolean;
}

export interface IAuthentication extends Document {
  email?: string;
  phone?: string;
  role: string;
  user_id: string;
  user_name: string;
  icon: icon;
  user_location: string;
  user_country: string;
  user_region: string;
  user_city: string;
  timezone: string;
  referral_code: string;
  is_active: boolean;
  is_deleted: boolean;
  is_blocked: boolean;
  blocked_by: IBlockedBy;
  last_login: Date;
  created_by: string;
  updated_by: string;
  status: boolean;
}
