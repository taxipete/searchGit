import { Component } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
      .mdl-spinner{
         margin: 10px auto;
         display: block;
      }
    `]
})
export class SearchComponent {
  items;
  errorMessage: string;
  showSpinner: boolean = false;
  constructor(private githubSearchService: GithubSearchService) { }

  getGitRepo(value) {
    if (value.length < 3) return;
    console.log("Looking for : " + value);
    this.showSpinner = true;
    this.githubSearchService.searchRepositories(value)
      .subscribe(
      data => {
        this.items = data.items,
        this.showSpinner = false
    },
      error => this.errorMessage = <any>error
      );
  }

}
