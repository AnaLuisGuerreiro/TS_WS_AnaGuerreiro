import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Anime} from "../models/anime";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl : string = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) { }

  // API for Animes List
  getAllAnimes(): Observable<Anime[]>{
    return this.http.get<Anime[]>(`${this.apiUrl}/top/anime`)
  }

  // API for 1 Anime by id
  getAnimeById(id: number): Observable<Anime>{
    return this.http.get<Anime>(`${this.apiUrl}/anime/${id}`)
  }
}
