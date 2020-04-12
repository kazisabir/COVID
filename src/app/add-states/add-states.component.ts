import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';


@Component({
  selector: 'app-add-states',
  templateUrl: './add-states.component.html',
  styleUrls: ['./add-states.component.css']
})
export class AddStatesComponent implements OnInit {

  constructor(private http: Http) {}
  confirmationString: string = 'New State/Ut has been Added !!';
  isAdded: boolean = false;
  StateObj: object = [];

  addNewState = function(state) {
    this.StateObj = {
      pid:state.pid,
     name:state.name,
     today:state.today,
     active:state.active,
     recover:state.recover,
     dec:state.dec
    };
    this.http
      .post('http://localhost:3000/states/', this.StateObj)
      .subscribe((res: Response) => {
        this.isAdded = true;
      });
      
  };
  ngOnInit() {}
}
