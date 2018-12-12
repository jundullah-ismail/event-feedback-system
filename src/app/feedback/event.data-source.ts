import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Event} from './event.model';
import {EventService} from '../../services/event.service';

export class EventDataSource extends DataSource<any> {

  constructor(private eventService: EventService) {
    super();
  }

  connect(): Observable<Event[]> {
    return this.eventService.findEvents();
  }

  disconnect() {
  }
}
