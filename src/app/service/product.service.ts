import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'http://localhost:8080/products'



  constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get(this.apiUrl+'/all');
    }

  getByPriceAsc(): Observable<any> {
    return this.http.get(this.apiUrl+'/product/price/up');
  }

  getByPriceDesc(): Observable<any> {
    return this.http.get(this.apiUrl+'/product/price/down')
  }

  getBySaleAsc():Observable<any> {
    return this.http.get(this.apiUrl+'/product/sale/up');
  }

  getBySaleDesc():Observable<any>{
    return this.http.get(this.apiUrl+'/product/sale/down');

  }


  getByParm(availability,category):Observable<any>{

    return this.http.get( 'http://localhost:8080/api/'+'product/category/'+ availability +'/'+ category);
   
     
  }
}

