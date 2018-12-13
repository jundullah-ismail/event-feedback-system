import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AcademyService} from '../../services/academy.service';
import {Album} from './album.model';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-album-list',
  templateUrl: './album-list.page.html',
})
export class AlbumListPage implements OnInit {

  public columns = ['id', 'title'];
  datasource: Observable<Album[]>;

  constructor(private academyService: AcademyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.datasource = this.academyService.findAlbums();
  }

  view(album: Album): void {
    console.log(JSON.stringify(album));
    this.router.navigate(['/albums/', album.id]);
  }

}
