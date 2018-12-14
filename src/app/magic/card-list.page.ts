import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MagicService} from '../../services/magic.service';
import {Card} from './card.model';
import {Router} from '@angular/router';
import {CardResult} from './card-result.model';

@Component({
  selector: 'trg-card-list',
  templateUrl: './card-list.page.html',
})
export class CardListPage implements OnInit {

  public columns = ['name', 'manaCost', 'type'];
  cardResult$: Observable<CardResult>;

  constructor(private magicService: MagicService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cardResult$ = this.magicService.findCards();
  }

  view(card: Card): void {
    console.log(JSON.stringify(card));
    this.router.navigate(['/magic/cards/', card.id]);
  }

}
