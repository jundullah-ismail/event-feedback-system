import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {EventService} from '../../services/event.service';
import {Sponsor} from './sponsor.model';

export class SponsorDataSource extends DataSource<any> {

  constructor(private eventService: EventService) {
    super();
  }

  connect(): Observable<Sponsor[]> {
    return this.eventService.findSponsors();
  }

  disconnect() {
  }
}
