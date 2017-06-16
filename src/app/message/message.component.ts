import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {
  response : any;
  message: string;
  isVisible: string;
  mex: string;
  cc: string;
  friend: string;
  contributo: string;
  
  isError = false;

  constructor(private http: Http, public router: Router,) { }

  ngOnInit() {
    this.isVisible = null;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";

  }

  onSubmit() {
    this.isVisible = 'true';
    return this.http.post(`https://andreaemariangela.herokuapp.com/sendmail`, {message: this.mex, copia: this.cc, contributo: this.contributo, friend: this.friend}, null).subscribe(
      (response) => {
        /* this function is executed every time there's a new output */
        console.log("VALUE RECEIVED: "+response);
        this.isVisible = null;
      },
      (err) => {
        /* this function is executed when there's an ERROR */
        console.log("ERROR: "+err);
        this.isVisible = null;
        this.isError = true;
     },
      () => {
        /* this function is executed when the observable ends (completes) its stream */
        console.log("COMPLETED");
        this.isVisible = null;

        this.router.navigate(['complete']);
      }
    );

  }

}
