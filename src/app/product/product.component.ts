import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  page= 1;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products= data;
    })
   }

}
