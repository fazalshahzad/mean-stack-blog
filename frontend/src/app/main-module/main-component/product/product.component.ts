import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectSize = ["S", "M", "L", "X-L", "XX-L"];
  newSizeArray: any;
  p: number = 1
  pageItem: number = 8
  totalProduct: any;

  // getProductWithCompanyName: any = []

  productView: boolean = true


  ProductArray: any = [];
  Url = 'http://localhost:8686/'

  constructor(
    private getProductDatafromservice: ProductApiService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.getProductDatafromservice.getProduct().subscribe((res: any) => {
      this.ProductArray = res.Result

      this.totalProduct = this.ProductArray.length  // pagination
    })
  }

  // *********************************** grid list view **************************//
  viewProduct() {
    this.productView = true
  }
  viewProduct1() {
    this.productView = false
  }
  // *********************************** grid list view **************************//

  // *********************************** get produt with categories **************************//

  // getproductName(companyName:any){
  // this.getProductDatafromservice.getProductByCompanyName(companyName).subscribe((res:any)=>{
  //   this.getProductWithCompanyName = res.Result
  // })
  // }



  // *********************************** ReDirect on Single Product Page **************************//
  reDirectSingleProductPage(_id: any) {
    this.Router.navigate(['View-Product',_id]);
  }

}
