import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  constructor( private http:Http) { }

  graphObj:object=[];
  isAdded:boolean=false;
  confirmationString:string='graph updated';

  UpdateGraph=function(data) {
    this.graphObj={
      id:data.gid,
      month:data.month,
      cases:data.cases

    };
    this.http
    .post('http://localhost:3000/results/', this.graphObj)
    .subscribe((res: Response) => {
      this.isAdded = true;
    });
  };

  ngOnInit(): void {
  }

}
