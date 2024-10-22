import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AnimeDetails, AnimeDetailsData, AnimeResponse} from "../models/anime";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl: string = "https://api.jikan.moe/v4/anime";

  constructor(private http: HttpClient) { }

  getAllAnimes(): Observable<AnimeResponse> {
    return this.http.get<AnimeResponse>(`${this.apiUrl}`);
  }

  getAnimeDetails(id : number): Observable<AnimeDetailsData>{
    return this.http.get<AnimeDetailsData>(`${this.apiUrl}/${id}`);
  }

  getAnimeByName(search: string): Observable<AnimeResponse> {
    return this.http.get<AnimeResponse>(`${this.apiUrl}?q=${search}`);
  }


}
