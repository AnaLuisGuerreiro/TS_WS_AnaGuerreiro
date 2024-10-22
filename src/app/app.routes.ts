import { Routes, RouterModule } from '@angular/router';
import {AnimeListComponent} from "./pages/anime-list/anime-list.component";
import {AnimeDetailsComponent} from "./pages/anime-details/anime-details.component";

export const routes: Routes = [
  {
    path:"",
    component: AnimeListComponent
  },
  {
    path:"anime/:id",
    component: AnimeDetailsComponent
  }
];
