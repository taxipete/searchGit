import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
    @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
