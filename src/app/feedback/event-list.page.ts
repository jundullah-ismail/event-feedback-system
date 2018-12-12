import {Component, OnInit} from '@angular/core';
import {EventDataSource} from './event.data-source';
import {EventService} from '../../services/event.service';
import {Event} from './event.model';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss']
})
export class EventListPage implements OnInit {

  public columns = ['id', 'code', 'name', 'venue'];
  public dataSource: EventDataSource;

  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new EventDataSource(this.eventService);
  }

  view(event: Event): void {
    console.log(JSON.stringify(event));
    this.router.navigate(['/feedback/event/list', event.code]);
  }
}
