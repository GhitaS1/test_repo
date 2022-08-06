import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NewInsuranceComponent } from './new-insurance/new-insurance.component';
import { NewOwnerComponent } from './new-owner/new-owner.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'cars', component: NewCarComponent},
  {path:'owners', component: NewOwnerComponent},
  {path:'insurance', component: NewInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
