import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../app/academy/event.model';

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

    return this.http.get<Guest>('data/event.json');
  }

}
