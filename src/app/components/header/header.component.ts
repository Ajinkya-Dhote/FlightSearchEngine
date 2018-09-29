import { Component, OnInit } from '@angular/core';
const APP_NAME = "Flight Search Engine";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private appName: String;
  constructor() {}

  ngOnInit() {
    this.appName = APP_NAME;
  }

}
