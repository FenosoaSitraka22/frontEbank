import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { RouterModule } from '@angular/router';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    AccountOperationsComponent,
    CustomerAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //andefasana requetes any am backend
    ReactiveFormsModule,// irecuperevana donnée @formulaire
    // RouterModule.forRoot([    //irecuperer na path variable
    //   {path:'customers/:customerId',
    //    component:CustomerAccountComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
