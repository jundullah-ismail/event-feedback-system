import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprentice} from '../app/academy/apprentice.model';
import {Cohort} from '../app/academy/cohort.model';
import {Organizer} from '../app/feedback/organizer.model';

@Injectable()
export class AcademyService {

  constructor(private http: HttpClient) {
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

  findOrganizersById(id: number): Observable<Organizer[]> {
    return this.http.get<Organizer[]>('data/organizers.json');
  }
}
