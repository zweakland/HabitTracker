import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.css']
})
export class AddHabitComponent implements OnInit {
  modalName:string = "";
  constructor() { 
    this.modalName = "Add Habit";
  }

  ngOnInit() {
  }


  addHabit(){
    var table = (<HTMLTableElement>document.getElementById("gridTable"));
    var habitName = (<HTMLInputElement>document.getElementById("habitName")).value;

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);
    row.className = 'tableStyle';
    
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:


    // Add some text to the new cells:
    var firstCell = row.insertCell(0);
    firstCell.style.border = '1px solid black';
    firstCell.style.width = '50px';
    firstCell.style.textAlign = 'center';
    firstCell.style.padding = '5px';
    firstCell.innerHTML = habitName;

    for (var i = 1; i<32; i++){
      var newCell = row.insertCell(i);
      newCell.style.border = '1px solid black';
      newCell.style.width = '50px';
      newCell.style.textAlign = 'center';
      newCell.style.padding = '5px';

    }
    
  }

}
