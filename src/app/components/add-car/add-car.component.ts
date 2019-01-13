import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  public carName: string;
  public carYear: number;

  @Output() addEvt = new EventEmitter();

  constructor() { }

  public addCar () {
    this.addEvt.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }

  ngOnInit() {
  }

}
