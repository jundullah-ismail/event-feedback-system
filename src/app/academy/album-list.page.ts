import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AcademyService} from '../../services/academy.service';
import {Album} from './album.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SalamWorldDialog} from './salam-world.dialog';

@Component({
  selector: 'trg-album-list',
  templateUrl: './album-list.page.html',
})
export class AlbumListPage implements OnInit {

  public columns = ['id', 'title'];
  dataSourceAlbum: Observable<Album[]>;

  constructor(private academyService: AcademyService,
              private router: Router,
              private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.dataSourceAlbum = this.academyService.findAlbums();
  }

  view(album: Album): void {
    console.log(JSON.stringify(album));
    this.router.navigate(['/albums/', album.id]);

  }

  show(): void {
  this.dialog.open(SalamWorldDialog)
  }

}
