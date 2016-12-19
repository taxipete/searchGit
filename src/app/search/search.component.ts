import { Component } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [``]
})
export class SearchComponent {
  items;
  errorMessage: string;
  constructor(private githubSearchService: GithubSearchService) { }

  getGitRepo(value) {
    if (value.length < 3) return;
    console.log("Looking for : " + value);
    this.githubSearchService.searchRepositories(value)
      .subscribe(
      data => this.items = data.items,
      error => this.errorMessage = <any>error
      );
  }

}
