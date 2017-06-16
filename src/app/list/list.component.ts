import { Component, OnInit } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  response : any;
  objects = [];
  object = {
    name: '',
    image:''
  };

  constructor(private http: Http, public router: Router,) { }

  ngOnInit() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";

      this.http.get('assets/giftlist.txt')
        .map(res => res.text())
        .subscribe(
          data => {this.response = data},
          err => {this.logError(err)},
          () => {this.onComplete()}
        );
    }

    logError(err) {
      console.error('There was an error: ' + err);
    }

    onComplete() {
      var data = JSON.parse(this.response);

      //this.router.navigate(['list']);
      for(let i in data){
        var object = {
          name: data[i].name,
          img: data[i].img
        };
        this.objects.push(object);
      }

    }

    setGift(obj){
      this.router.navigate(['message']);
    }

}
