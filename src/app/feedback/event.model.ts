import {Sponsorship} from './sponsorship.model';

export interface  Event {
  id: number;
  name: string;
  venue: string;
  eventDate: Date;
  totalAttendees: number;
  sponsorship: Sponsorship;
}
