import {Component} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Observable} from 'rxjs';
import {Event} from './event.model';

@Component({
  selector: 'trg-event-list',
  templateUrl: './event-list.page.html',
})
export class EventListPage {

  datasource: Observable<Event[]>;

  constructor(private eventService : EventService) {
    this.eventService.findEvents()
      .subscribe(data=>{
        console.log(data);
      });

    this.datasource = this.eventService.findEvents();
  }
}
