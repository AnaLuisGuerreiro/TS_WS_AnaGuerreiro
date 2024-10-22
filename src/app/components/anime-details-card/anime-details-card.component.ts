import {Component, Input} from '@angular/core';
import {AnimeDetails} from "../../models/anime";

@Component({
  selector: 'app-anime-details-card',
  standalone: true,
  imports: [],
  templateUrl: './anime-details-card.component.html',
  styleUrl: './anime-details-card.component.scss'
})
export class AnimeDetailsCardComponent {
  @Input() anime!: AnimeDetails;
}
