import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {HttpClientModule}from '@angular/common/http'
import { from } from 'rxjs';
import axios from "axios"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  data={};
  upd = [];
  exist = false;
  UpdateObj: object = {};
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  confirmationString: string = 'updated successfully !!';
  isUpdated: boolean = false;

  update = function(udata) {
    console.log("form datra:",udata.value)
    this.UpdateObj = {
      pid:udata.value.pid,
      name:udata.value.name,
      today:udata.value.today,
      active:udata.value.active,
      recover:udata.value.recover,
      dec:udata.value.dec,
      
    };
    const url = 'http://localhost:3000/states/'+this.id;
    console.log("put data:",this.UpdateObj)
    this.isUpdated=false;
    // this.http
    //   .put(url, JSON.stringify(this.UpdateObj), { headers: this.headers })
    //   .toPromise()
    //   .then(() => {
    //     this.router.navigate(['/']);
    //   });
      var self=this;
      axios({
        method: 'put',
        url: 'http://localhost:3000/states/'+this.id,
        data:this.UpdateObj
      }) .then(function (response) {
        self.isUpdated=true
        self.router.navigate(['/']);
      });
  };
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http
      .get('http://localhost:3000/states')
      .subscribe((res: Response) => {
        this.isUpdated = false;
        var finalData:any=res;
        console.log("response data:",res)
        console.log("current id:",this.id)
        for (var i = 0; i < finalData.length; i++) {
          if (parseInt(finalData[i].id) === this.id) {
            this.exist = true;
            console.log("final index data:",finalData[i])
            this.data=finalData[i];
            console.log("after updating:",this.data)
            break;
          } else {
            this.exist = false;
          }
        }
      });
      console.log("updated data:",this.data)
  }
}
