import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Card} from './card.model';
import {MagicService} from '../../services/magic.service';

@Component({
  selector: 'trg-card-list',
  templateUrl: './card-list.page.html',
})
export class CardListPage implements OnInit {

  public columns = ['name','manaCost', 'type'];
  dataSource: Observable<Card[]>;

  constructor(private magicService: MagicService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = this.magicService.findCards();
  }

  view(card: Card): void {
    console.log(JSON.stringify(card));
    this.router.navigate(['/magic/card/', card.id]);
  }

}
