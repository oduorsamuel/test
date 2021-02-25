import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { IndexComponent } from './index.component';


@NgModule({
  declarations: [CheckoutComponent, PurchaseComponent, IndexComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
