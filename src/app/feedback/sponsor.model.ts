import {SponsorshipType} from './sponsorship.enum';
export interface Sponsor {
  companyName: string;
  type: SponsorshipType;
  amountSponsored: string;
}
