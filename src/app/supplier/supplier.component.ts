import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/product.service';
import { SupplierService } from '../service/supplier.service';
import { Supplier } from '../model/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[];
  page = 1;

  constructor(private supplierservice: SupplierService) { }

  ngOnInit() {
    this.supplierservice.getAll().subscribe(data => {
      console.log(data);
      this.suppliers= data;
    })
   }

}
