import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/todo.models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public cars = [
    {name: 'Ford', year: 2015},
    {name: 'Shkoda', year: 2012}
  ];

  constructor() { }


  ngOnInit() {
  }

  public updateCarList (car) {
    this.cars.push(car);
  }

}
