import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class GithubSearchService {
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

    constructor(private http: Http) { }

  searchRepositories(value) {
    console.log(value);
    var search = new URLSearchParams()
    search.set('q', value);
    search.set('sort', 'stars');
    search.set('order', 'desc');
    //var url  = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';

    return this.http
      .get('https://api.github.com/search/repositories?', { search })

      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }



    getGitRepo(id) {
      console.log(id);
      var url = 'https://api.github.com/repositories/' + id;
      //var url  = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';

      return this.http
        .get(url)
        .map((response: Response) => response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }




  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
