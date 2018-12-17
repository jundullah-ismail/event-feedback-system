import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprentice} from '../app/academy/apprentice.model';
import {Cohort} from '../app/academy/cohort.model';
import {Album} from '../app/academy/album.model';

@Injectable()
export class AcademyService {

  constructor(private http: HttpClient) {
  }


  findAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  findAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums/' + id);
  }

  findCohorts(): Observable<Cohort[]> {
    return this.http.get<Cohort[]>('data/cohorts.json');
  }

  findCohortById(id: number): Observable<Cohort> {
    return this.http.get<Cohort>('data/cohort.json');
  }

  findApprentices(): Observable<Apprentice[]> {
    return this.http.get<Apprentice[]>('data/apprentices.json');
  }

  findApprenticeById(id: number): Observable<Apprentice> {
    return this.http.get<Apprentice>('data/apprentice.json');
  }
}
