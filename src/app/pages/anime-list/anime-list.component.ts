import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AnimeService} from "../../services/anime.service";
import {Anime, AnimeResponse} from "../../models/anime";
import {AnimeCardComponent} from "../../components/anime-card/anime-card.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    AnimeCardComponent,
    FormsModule
  ],
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit{

  animeList: Anime[] = [];
  search: string = "";

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.getAnimeList();
  }

  getAnimeList(): void {
    this.animeService
      .getAllAnimes()
      .subscribe((animeResponse: AnimeResponse): void => {
        this.animeList = animeResponse.data;
      });
  }

  onSearch(): void {
    if (this.search !== "") {
      this.animeService
        .getAnimeByName(this.search)
        .subscribe((userSearch: AnimeResponse): void => {
          this.animeList = userSearch.data;
        });
    } else {
      this.getAnimeList();
    }
  }

}
