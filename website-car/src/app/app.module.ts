import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewOwnerComponent } from './new-owner/new-owner.component';
import { NewCarComponent } from './new-car/new-car.component';
import { NewInsuranceComponent } from './new-insurance/new-insurance.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CanActivateRouteGuard } from './can-activate-router-cars';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerWrapperComponent } from './owner-wrapper/owner-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    NewOwnerComponent,
    NewCarComponent,
    NewInsuranceComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewCarComponent,
    OwnerListComponent,
    OwnerWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
