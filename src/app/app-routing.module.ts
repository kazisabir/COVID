import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpdateComponent} from './update/update.component';
import{AddStatesComponent} from './add-states/add-states.component';
import {GraphComponent} from './graph/graph.component';
import { from } from 'rxjs';



const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'add',component:AddStatesComponent},
  {path:'graph',component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
