import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QrInfoSaleService } from '../dashboard/services/qrInfoSale.service';  // Asegúrate de que la ruta al servicio sea correcta

@Component({
  selector: 'app-Landingpage',
  templateUrl: './Landingpage.component.html',
  styleUrls: ['./Landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  id_sale: any;
  sale: any = {}; // Objeto para almacenar la venta
  caracteristicas: any = {}; // Array para almacenar las características

  constructor(
    private activatedrouter: ActivatedRoute,
    private qTest: QrInfoSaleService  // Corregir el nombre de la variable de inyección
  ) {}

  ngOnInit() {
    this.activatedrouter.params.subscribe(params => {
      this.id_sale = params['id'];
      // this.getCommerceDetail(params['id']);
      console.log("param", params['id']);
    });
    this.subco();
  }

  subco() {
    this.qTest.getqr(this.id_sale).subscribe((resp: any) => {  // Usar la variable qTest en lugar de Qtest
      this.sale = resp; // Asignamos los datos a la variable
     // this.caracteristicas = JSON.parse(this.sale.caracteristicas);
      this.caracteristicas = JSON.parse(this.sale.caracteristicas)[0];
      console.log("resp", this.caracteristicas);
      //this.element = ({uuid2: resp.data.raffle.game.name, uuid: resp.data.amount, transaction_status_name: resp.data.stateSale.description, created_at: resp.data.createdAt, prizeWon: resp.data.prizeWon});
      //console.log("this.element", this.element);
    });
  }
}
