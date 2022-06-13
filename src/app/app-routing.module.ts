import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path:"customers",component: CustomersComponent},
  { path:"accounts",component: AccountsComponent},
  {path:"customers/new",component:NewCustomerComponent},
  {path:"customers/:customerId", component:CustomerAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
