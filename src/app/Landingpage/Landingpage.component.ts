import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QrInfoSaleService } from './Services/QrInfoSale.service';

@Component({
  selector: 'app-Landingpage',
  templateUrl: './Landingpage.component.html',
  styleUrls: ['./Landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  id_sale: any;
  sale: any = {}; 
  caracteristicas: any = {}; 

  constructor(
    private activatedrouter: ActivatedRoute,
    private qTest: QrInfoSaleService 
  ) {}

  ngOnInit() {
    this.activatedrouter.params.subscribe(params => {
      this.id_sale = params['id'];
    });
    this.subco();
  }

  subco() {
    this.qTest.getqr(this.id_sale).subscribe((resp: any) => {  
      this.sale = resp;
       this.caracteristicas = JSON.parse(this.sale.caracteristicas)[0];
    });
  }
}
