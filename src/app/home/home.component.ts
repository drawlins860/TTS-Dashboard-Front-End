import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/product.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 products: Product[];
 page = 1;
 availability:boolean;
  category:number;
  orderBy: String;
  Ascdesc: String;

  update($event){
    this.productService.getByParm(this.availability,this.category).subscribe(data => {
      this.products = data;
    });
  }


  constructor(private productService: ProductsService) { }



  ngOnInit() {
   this.productService.getAll().subscribe(data => {
     this.products= data;
     console.log(this.products);
   })
  }

  SortPrice($event:any){
    let icon = document.getElementById("asc-desc1");
    if(icon.className === "fas fa-angle-down"){
      icon.className ="fas fa-angle-up";
      this.productService.getByPriceAsc().subscribe(data => {
      this.products = data;
    });
    }else {
      icon.className = "fas fa-angle-down";
      this.productService.getByPriceDesc().subscribe(data => {
        this.products = data;
      });
    };
    
  }

  SortSale(){
    let icon = document.getElementById("asc-desc1");
    if(icon.className === "fas fa-angle-down"){
      icon.className ="fas fa-angle-up";
      this.productService.getBySaleAsc().subscribe(data => {
      this.products = data;
    });
    }else {
      icon.className = "fas fa-angle-down";
      this.productService.getBySaleDesc().subscribe(data => {
        this.products = data;
      });
    };

  }


  
}



// SortSale($event:any){
//   let icon = document.getElementById("asc-desc2");
//   if(icon.className === "fas fa-angle-down"){
//     icon.className ="fas fa-angle-up";
//     this.homeService.getBySaleAsc().subscribe(data => {
//     this.home = data;
//   });
//   }else{
//     icon.className ="fas fa-angle-down"
//     this.homeService.getBySaleDesc().subscribe(data => {
//       this.home = data;
//     });
//   };
  
// }
// SortDiscount($event:any){
//   let icon = document.getElementById("asc-desc3");
//   if(icon.className === "fas fa-angle-down"){
//     icon.className ="fas fa-angle-up";
//     this.homeService.getByDiscountAsc().subscribe(data => {
//     this.home = data;
//   });
//   }else{
//     icon.className ="fas fa-angle-down"
//     this.homeService.getByDiscountDesc().subscribe(data => {
//       this.home = data;
//     });
//   };
  
