import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../app/feedback/event.model';
import {Participant} from '../app/feedback/participant.model';

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

}

export class ParticipantService {
  constructor(private http: HttpClient) {
    console.log('constructor is working');
  }

  findParticipants(): Observable<Participant[]> {
    console.log('findParticipant is working');

    return this.http.get<Participant[]>('data/participant.json');

  }

  findParticipant(): Observable<Participant> {
    console.log('findParticipant is working');

    return this.http.get<Participant>('data/participant.json');
  }

}
