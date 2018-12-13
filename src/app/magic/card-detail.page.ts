import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Card} from './card.model';
import {MagicService} from '../../services/magic.service';


@Component({
  selector: 'trg-card-detail',
  templateUrl: './card-detail.page.html',
})
export class CardDetailPage implements OnInit {

  card$: Observable<Card>;
  constructor(private magicService: MagicService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: string }) => {
      this.card$ = this.magicService.findCardById(params.id);
    });
  }
}
