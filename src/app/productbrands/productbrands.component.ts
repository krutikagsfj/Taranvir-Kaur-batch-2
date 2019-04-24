import { Component, OnInit } from '@angular/core';
import {MyserviceService} from 'src/app/myservice.service';
@Component({
  selector: 'app-productbrands',
  templateUrl: './productbrands.component.html',
  styleUrls: ['./productbrands.component.css']
})
export class ProductbrandsComponent implements OnInit {

  constructor(private pb : MyserviceService) { }
  productdata;
  ngOnInit() {
    this.pb.getProductDetails()
      .subscribe(res=>
        {
          this.productdata=res;
          console.log(this.productdata)
        })
  }

}
