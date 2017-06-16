import {Component, Injectable, OnInit} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private http: Http, public router: Router) { }

  name: any;
  password: any;
  response: any;
  isError= false;

  private eventDate: Date = new Date(2017, 5, 2);

  private diff: number;
  private countDownResult: number;
  private days: number;
  private hours: number;
  private minutes: number;
  private seconds: number;

  ngOnInit() {
    Observable.interval(1000).map((x) => {
      this.diff = Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000);
    }).subscribe((x) => {
      this.days = this.getDays(this.diff);
      this.hours = this.getHours(this.diff);
      this.minutes = this.getMinutes(this.diff);
      this.seconds = this.getSeconds(this.diff);
    });
  }


  getDays(t){
    var days;
    days = Math.floor(t / 86400);
    return days;
  }

  getHours(t){
    var days, hours;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    return hours;
  }

  getMinutes(t){
    var days, hours, minutes;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    return minutes;
  }

  getSeconds(t){
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;
    return seconds;
  }



  onSubmit() {
    if(this.password === '2giugno2017'){
      this.isError = false;
      this.router.navigate(['list']);
    }else{
      this.isError = true;
    }
  }


}
