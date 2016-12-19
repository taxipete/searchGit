import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DisplayRepoComponent } from './display-repo/display-repo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'repo', },
  { path: 'repo', component: SearchComponent },
  { path: 'repo/:id', component: DisplayRepoComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  SearchComponent,
  PageNotFoundComponent,
  DisplayRepoComponent
];
