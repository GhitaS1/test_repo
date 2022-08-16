import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NewInsuranceComponent } from './new-insurance/new-insurance.component';
import { NewOwnerComponent } from './new-owner/new-owner.component';
import { CanActivateRouteGuard } from './can-activate-router-cars';
import { OwnerWrapperComponent } from './owner-wrapper/owner-wrapper.component';
import { CarWrapperComponent } from './car-wrapper/car-wrapper.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'cars', component: CarWrapperComponent, canActivate: [CanActivateRouteGuard]},
  {path:'owners', component: OwnerWrapperComponent},
  {path:'insurance', component: NewInsuranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
