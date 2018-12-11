import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../app/feedback/event.model';
import {Participant} from '../app/feedback/participant.model';
import {Sponsorship} from '../app/feedback/sponsorship.model';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {
    console.log('constructor is working');
  }

  findEvents(): Observable<Event[]> {
    console.log('findEvents is working');

    return this.http.get<Event[]>('data/events.json');

  }

  findEvent(): Observable<Event> {
    console.log('findEvent is working');

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


}
