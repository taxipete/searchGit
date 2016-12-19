import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tickbox',
  template: `
                    <i *ngIf="value" class="material-icons">done</i>
                    <i *ngIf="!value"class="material-icons">clear</i>
  `,
  styles: [``]
})
export class TickboxComponent implements OnInit {
@Input() value:boolean;


  ngOnInit() {
  }

}
