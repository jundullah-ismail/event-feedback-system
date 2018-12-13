import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card} from '../app/magic/card.model';

@Injectable()
export class MagicService {

  constructor(private http: HttpClient) {
  }

  findCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://api.magicthegathering.io/v1/cards');
  }

  findCardById(id: string): Observable<Card> {
    return this.http.get<Card>('https://api.magicthegathering.io/v1/cards/' + id);
  }
}
