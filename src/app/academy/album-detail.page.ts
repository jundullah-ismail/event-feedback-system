import {Component, OnInit} from '@angular/core';
import {AcademyService} from '../../services/academy.service';
import {Observable} from 'rxjs';
import {Album} from './album.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'trg-album-detail',
  templateUrl: './album-detail.page.html',
})
export class AlbumDetailPage implements OnInit {

  album$: Observable<Album>;
  constructor(private academyService: AcademyService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // extracting param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.album$ = this.academyService.findAlbumById(params.id);
    });
  }
}
