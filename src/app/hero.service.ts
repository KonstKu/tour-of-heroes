import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.log('fetched heroes');this.http.get<Hero[]>(this.heroesUrl)
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
