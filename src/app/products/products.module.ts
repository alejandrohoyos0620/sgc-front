import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import {MaterialModule} from '@material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsContainer } from './containers/products/products.container';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
