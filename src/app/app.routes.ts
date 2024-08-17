import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingListComponent } from './parking-list/parking-list.component';

const routes: Routes = [
  { path: 'form', component: ParkingFormComponent },
  { path: 'list', component: ParkingListComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
