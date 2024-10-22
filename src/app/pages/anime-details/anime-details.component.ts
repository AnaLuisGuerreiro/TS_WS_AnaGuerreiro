import {Component, Input, OnInit} from '@angular/core';
import {AnimeDetails, AnimeDetailsData} from "../../models/anime";
import {ActivatedRoute, Params} from "@angular/router";
import {AnimeService} from "../../services/anime.service";
import {NgIf} from "@angular/common";
import {AnimeDetailsCardComponent} from "../../components/anime-details-card/anime-details-card.component";

@Component({
  selector: 'app-anime-details',
  standalone: true,
  imports: [
    NgIf,
    AnimeDetailsCardComponent
  ],
  templateUrl: './anime-details.component.html',
  styleUrl: './anime-details.component.scss'
})
export class AnimeDetailsComponent implements OnInit{
  anime! : AnimeDetails;
  id : number = 0;


  constructor(private route: ActivatedRoute, private animeService : AnimeService) {
  }

  ngOnInit(): void {
    this.getParams()
    this.getAnimeById()
  }

  getParams() : void{
    this.route.params.subscribe((params : Params | { id: number }) : void  => {
      this.id = params.id;
    })
  }

  getAnimeById(): void {
    if (this.id) {
      this.animeService
        .getAnimeDetails(this.id)
        .subscribe((response:  AnimeDetailsData) :void => {
          this.anime = response.data;
        });
    }
  }
}
