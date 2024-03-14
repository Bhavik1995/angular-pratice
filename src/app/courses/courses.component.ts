import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
    ngOnInit(): void {
      
    }

 dataBase = [
      {
        id: 1,
        name: "Bhavik",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 2,
        name: "Ojas",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 3,
        name: "Rahul",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 4,
        name: "Vidhi",
        pass: "Pass",
        weight: 50,
        gender: 'Female'
      },
      {
        id: 5,
        name: "Hiranshi",
        pass: "Pass",
        weight: 50,
        gender: 'Female'
      },
      {
        id: 6,
        name: "Sherya",
        pass: "Pass",
        weight: 50,
        gender: 'Female'
      },
      {
        id: 7,
        name: "Yesho",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 8,
        name: "Deep",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 9,
        name: "Vinay",
        pass: "Pass",
        weight: 50,
        gender: 'Male'
      },
      {
        id: 10,
        name: "Karishma",
        pass: "Pass",
        weight: 50,
        gender: 'Female'
      },

    ]

    getTotalData(){
      return this.dataBase.length;
    }

    getMaleData(){
      return this.dataBase.filter(data => data.gender === 'Male').length;
    }

    getFemaleData(){
      return this.dataBase.filter(data => data.gender === 'Female').length;
    }

    radioButtonCount: string = "All";

    onFilterRadioButtonChange(data: string){
      this.radioButtonCount = data;
      // console.log(this.radioButtonCount)
    }
}
