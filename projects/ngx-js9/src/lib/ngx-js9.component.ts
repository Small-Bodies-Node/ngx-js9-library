import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-js9',
  templateUrl: './ngx-js9.component.html',
  styleUrls: ['./ngx-js9.component.scss'],
})
export class NgxJs9Component implements OnInit {
  // --->>

  @Input('fitsUrl')
  public fitsUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
