import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../app/feedback/event.model';
import {Participant} from '../app/feedback/participant.model';
import {Sponsorship} from '../app/feedback/sponsorship.model';
import {Organizer} from '../app/feedback/organizer.model';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {
    console.log('constructor is working');
  }

  findEvents(): Observable<Event[]> {
    console.log('findEvents is working');

    return this.http.get<Event[]>('data/event.json');

  }
  findEventById(): Observable<Event> {
    console.log('findEventById is working');

    return this.http.get<Event>('data/event.json');

  }

  findParticipants(): Observable<Participant[]> {
    console.log('findParticipants is working');

    return this.http.get<Participant[]>('data/participants.json');

  }

  findParticipant(): Observable<Participant> {
    console.log('findParticipant is working');

    return this.http.get<Participant>('data/participant.json');
  }


  findSponsorship(): Observable<Sponsorship> {
    console.log('findSponsor is working');

    return this.http.get<Sponsorship>('data/sponsor.json');
  }

  findOrganizerById(): Observable<Organizer> {
    console.log('findOrganizerById is working');

    return this.http.get<Organizer>('data/organizer.json');
  }

  findOrganizers(): Observable<Organizer[]> {
    console.log('findOrganizers is working');

    return this.http.get<Organizer[]>('data/organizer.json');
  }


}
