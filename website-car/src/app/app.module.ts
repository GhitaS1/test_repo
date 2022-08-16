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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanActivateRouteGuard } from './can-activate-router-cars';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerWrapperComponent } from './owner-wrapper/owner-wrapper.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { FocusInputDirective } from './directives/focus-input.directive';
import { TableRowColorDirective } from './directives/table-row-color.directive';
import { ButtonsComponent } from './buttons/buttons.component';
import { CommonModule } from '@angular/common';
import { MyFirstPipePipe } from './pipes/my-first-pipe.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { ButtonModule} from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarWrapperComponent } from './car-wrapper/car-wrapper.component';
import { CarListComponent } from './car-list/car-list.component'

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
    OwnerWrapperComponent,
    ChangeBackgroundDirective,
    FocusInputDirective,
    TableRowColorDirective,
    ButtonsComponent,
    MyFirstPipePipe,
    PhonePipe,
    CarWrapperComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
