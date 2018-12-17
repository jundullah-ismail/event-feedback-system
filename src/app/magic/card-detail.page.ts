import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
//import {Card} from './card.model';
import {MagicService} from '../../services/magic.service';
import {CardResult} from './card-result.model';


@Component({
  selector: 'trg-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss']
})
export class CardDetailPage implements OnInit {

  cardResult$: Observable<CardResult>;
  constructor(private magicService: MagicService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: string }) => {
      this.cardResult$ = this.magicService.findCardById(params.id);
    });
  }
}
