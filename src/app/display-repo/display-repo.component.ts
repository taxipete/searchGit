import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params  } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrls: ['./display-repo.component.css']
})
export class DisplayRepoComponent implements OnInit {

    repo;

  constructor(
        private route: ActivatedRoute,
        private location: Location,
        private githubSearchService: GithubSearchService
  ) { }

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.githubSearchService.getGitRepo(+params['id']))
        .subscribe(repo => this.repo = repo);
    }

    goBack(): void {
        this.location.back();
    }

}
