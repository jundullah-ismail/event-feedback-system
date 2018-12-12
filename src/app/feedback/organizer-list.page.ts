import {Component, OnInit} from '@angular/core';
import {Organizer} from './organizer.model';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {OrganizerSourceCode} from './organizer.source-code';

@Component({

  selector: 'trg-organizer-list',
  templateUrl: './organizer-list.page.html',
  styleUrls: ['./organizer-list.page.scss']
})
export class OrganizerListPage implements OnInit {

  public columns = ['id', 'code', 'name'];
  public dataSource: OrganizerSourceCode;

  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new OrganizerSourceCode(this.eventService);
  }

  view(organizer: Organizer): void {
    console.log(JSON.stringify(organizer));
    this.router.navigate(['/feedback/organizers/', organizer.code]);
  }
}
