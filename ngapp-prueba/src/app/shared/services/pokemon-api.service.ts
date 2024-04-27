import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroment';
import { Observable, catchError } from 'rxjs';
import { PokeAPIResponse } from '../models/pokemon-api.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private readonly urlApiPoke: string = environment.apiPoke;
  constructor(private httpClient: HttpClient) {}

  /**
   * Request para traer data de pokemones
   *
   * @return {Observable<PokeAPIResponse>}
   * @memberof PokemonApiService
   */
  public getAllPokemon(): Observable<PokeAPIResponse> {
    return this.httpClient.get<PokeAPIResponse>(this.urlApiPoke).pipe(
      catchError((err) => {
        console.error(err);
        throw Error();
      })
    );
  }
}
