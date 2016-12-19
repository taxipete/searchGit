import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tickbox',
  template: `<div class="wrapper">
                    <i *ngIf="value" class="material-icons" style="color:rgb(63,81,181)">done</i>
                    <i *ngIf="!value"class="material-icons" style="color:rgb(255,64,129)">clear</i>
            </div>
  `,
  styles: [`
      .wrapper{
          margin-top: 10px;
      }`]
})
export class TickboxComponent implements OnInit {
@Input() value:boolean;


  ngOnInit() {
  }

}
