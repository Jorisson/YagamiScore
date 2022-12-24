import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component"
import {FormAddScoreComponent} from "./pages/form-add-score/form-add-score.component"
import {PageRankingComponent} from "./pages/page-ranking/page-ranking.component"
import {PagePlayerComponent} from './pages/page-player/page-player.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'score', component: FormAddScoreComponent},
  {path:'ranking', component: PageRankingComponent},
  {path:'player', component: PagePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
