import { Component, OnInit } from '@angular/core';

interface Habit {
  id: number,
  title: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName: string = "";
  modalName: string = "";
  habits: Habit[];
  id: number;
  testTitle: string;
  rows: number[] = [];

  constructor() {
    this.appName = "Habit Tracker"
    this.modalName = "Add Habit"
  }

  ngOnInit() {
    this.habits = [
      { id: 1, "title": "Workout" }
    ]
  }

  //   btnClick(num) {
  //     alert("Cell index is: " + num.cellIndex + 1);

  //     var x = document.getElementById("gridTable").getElementsByTagName("td");
  //     x[num].style.backgroundColor = "black";            
  // }


  //   cellColor(event:any) {
  //     let value = event.target.innerText;
  //     console.log("value", value);
  // }

  deleteRow(e) {
    const index = this.habits.indexOf(e);
    this.habits.splice(index, 1);
  }

  addTest() {


    this.habits.push(
      {
        title: this.testTitle,
        id: this.id
      }
    )


    // for (let i=0; i<31;i++){
    //   this.rows.push(i);
    // }

  }

  printPage() {

    window.print();

  }

}
