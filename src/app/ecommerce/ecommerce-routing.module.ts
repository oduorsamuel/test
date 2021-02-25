import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: '',
    component: IndexComponent,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'purchase',
        component: PurchaseComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
