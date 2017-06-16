import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  nome;
  amici = [];
  response : any;


  constructor(private http: Http, public router: Router,) { }

  ngOnInit() {
  }


  addAmico(newAmico: string) {
    if (newAmico) {
      this.amici.push(newAmico);
    }
  }

  onSubmit() {
    this.router.navigate(['list']);
  }

}
