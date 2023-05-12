import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductService } from './template/demo/service/product.service';
import { CountryService } from './template/demo/service/country.service';
import { CustomerService } from './template/demo/service/customer.service';
import { EventService } from './template/demo/service/event.service';
import { IconService } from './template/demo/service/icon.service';
import { NodeService } from './template/demo/service/node.service';
import { PhotoService } from './template/demo/service/photo.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppLayoutModule } from './template/layout/app.layout.module';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        DashboardModule,
        AppLayoutModule
    ],
    providers: [
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
