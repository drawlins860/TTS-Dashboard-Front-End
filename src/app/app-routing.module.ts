import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {SupplierComponent} from './supplier/supplier.component';
import {ProductComponent} from './product/product.component'
import {HomeComponent} from './home/home.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'supplier', component: SupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
