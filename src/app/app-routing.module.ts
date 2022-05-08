import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewEventComponent} from "./add-new-event/add-new-event.component";


const routes: Routes = [
  { path: 'add-event', component: AddNewEventComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
