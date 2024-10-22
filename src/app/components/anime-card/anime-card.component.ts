import {Component, Input} from '@angular/core';
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [
    MdbRippleModule,
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.scss'
})
export class AnimeCardComponent {
  @Input() mal_id!         : number;
  @Input() title_japanese! : string;
  @Input() title!          : string;
  @Input() image_url!      : string;
  @Input() score!          : string;
  @Input() start_date!     : string;
  @Input() episodes!       : number;
  @Input() genres!         : any;
  @Input() name!           : string;

}
