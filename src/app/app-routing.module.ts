import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MediaPageComponent} from "./media-page/media-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: ':mediaType/:id', component: MediaPageComponent},
  // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
