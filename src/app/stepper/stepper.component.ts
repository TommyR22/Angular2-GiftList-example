import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() step;
  executed1 = false;
  executed2 = false;
  executed3 = false;
  executed4 = false;


  constructor() { }

  ngOnInit() {
    switch(this.step) {
      case 1: this.executed1 = true; break;
      case 2: this.executed2 = true; break;
      case 3: this.executed3 = true; break;
      case 4: this.executed4 = true; break;
      default: this.executed1 = false; this.executed2 = false; this.executed3 = false; this.executed4 = false; break;
    }

  }

}
