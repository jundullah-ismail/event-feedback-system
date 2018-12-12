import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {Sponsor} from './sponsor.model';
import {SponsorDataSource} from './sponsor.data-source';

@Component({
  selector: 'trg-sponsor-list',
  templateUrl: './sponsor-list.page.html',
  styleUrls: ['./sponsor-list.page.scss']
})
export class SponsorListPage implements OnInit {

  public columns = ['code', 'companyName', 'amountSponsored', 'sponsorshipType'];
  public dataSource: SponsorDataSource;


  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new SponsorDataSource(this.eventService);
  }

  view(sponsor: Sponsor): void {
    console.log(JSON.stringify(sponsor));
    this.router.navigate(['/feedback/sponsors/', sponsor.code]);
  }
}
