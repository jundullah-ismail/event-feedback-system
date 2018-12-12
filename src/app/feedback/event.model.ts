import {Sponsor} from './sponsor.model';

export interface  Event {
  id: number;
  code: string,
  name: string;
  venue: string;
  eventDate: Date;
  totalAttendees: number;
  sponsorship: Sponsor;
}
