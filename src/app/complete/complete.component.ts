import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
  }

}
