import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {
  sideStatus:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
}