import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-select',
  templateUrl: './month-select.component.html',
  styleUrls: ['./month-select.component.css']
})
export class MonthSelectComponent implements OnInit {
modalName:string = "";
month:string = "";

  constructor() {
    this.modalName = "Select Month";
    this.month = "Month";
  }

  ngOnInit() {
  }

}
