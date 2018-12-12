import {SponsorshipType} from './sponsorship.enum';

export interface Sponsor {
  id: number;
  code: string;
  companyName: string;
  sponsorshipType: SponsorshipType;
  amountSponsored: string;
}
