import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Data } from '../../../data';
import { Chart } from 'chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: Http,private httpClient: HttpClient) {}
  id: number;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  states = [];
  totalActive=0;
  totaltoday=0;
  totalrecover=0;
  totaldeath=0;

  showmodal=false;

  data: Data[];
  url = 'http://localhost:3000/results';
  month = [];
  cases = [];
  chart = [];

  fetchData = function() {
    this.http
      .get('http://localhost:3000/states')
      .subscribe((res: Response) => {
        this.states = res.json();
        console.log( 'states are'+this.states)
        for(let idx in this.states){
          this.totalActive+=this.states[idx].active
        }
        for(let idy in this.states){
          this.totaltoday+=this.states[idy].today
        }
        for(let idz in this.states){
          this.totalrecover+=this.states[idz].recover
        }
        for(let idd in this.states){
          this.totaldeath+=this.states[idd].dec
        }
      });
      console.log( 'states are',this.states)
  };

  showDialog=function(){
    console.log("calleld",this.chart);
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.cases.push(y.cases);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.cases,
              borderColor: '#f73e2e',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
    this.showmodal=!this.showmodal;
  }

  deleteProduct = function(id) {
    if (confirm('Are you sure?')) {
      const url = `${'http://localhost:3000/states'}/${id}`;
      return this.http
        .delete(url, { headers: this.headers })
        .toPromise()
        .then(() => {
          this.fetchData();
        });
    }
  };

   ngOnInit() {
    this.fetchData();


    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.cases.push(y.cases);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.cases,
              borderColor: '#f73e2e',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
   


    
  }
}
