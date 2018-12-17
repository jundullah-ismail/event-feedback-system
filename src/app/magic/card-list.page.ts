import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MagicService} from '../../services/magic.service';
import {Card} from './card.model';
import {Router} from '@angular/router';
import {CardListResult} from './card-list-result.model';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {CardCreatorDialog} from './card-creator.dialog';
import {CardListDialog} from './card-list-dialog';

@Component({
  selector: 'trg-card-list',
  templateUrl: './card-list.page.html',
})
export class CardListPage implements OnInit {

  public columns = ['name', 'manaCost', 'type'];
  cardListResult$: Observable<CardListResult>;

  constructor(private magicService: MagicService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cardListResult$ = this.magicService.findCards();
  }

  view(card: Card): void {
    console.log(JSON.stringify(card));
    this.router.navigate(['/magic/cards/', card.id]);
  }

  show(): void {
    const config = new MatDialogConfig();
    config.width = "600px";
    config.height = "480px";
    const dialogRef = this.dialog.open(CardCreatorDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });

  }
  show(): void {
    const config = new MatDialogConfig();
    config.width = "600px";
    config.height = "480px";
    const dialogRef = this.dialog.open(CardListDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }
}
