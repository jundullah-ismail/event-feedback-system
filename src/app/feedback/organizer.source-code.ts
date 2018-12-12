import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Organizer} from './organizer.model';
import {EventService} from '../../services/event.service';

export class OrganizerSourceCode extends DataSource<any> {

  constructor(private eventService: EventService) {
    super();
  }

  connect(): Observable<Organizer[]> {
    return this.eventService.findOrganizers();
  }

  disconnect() {
  }
}
