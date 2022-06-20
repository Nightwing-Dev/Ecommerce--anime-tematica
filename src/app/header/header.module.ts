import { MatCardModule } from '@angular/material/card';
import { CartComponent } from './../cart/cart.component';
import { HeadComponent } from './../head/head.component';
//import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from '../material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header.component';


@NgModule({
    declarations: [
        HeaderComponent,
       
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        MaterialModule,
        MatGridListModule,
        MatCardModule
        //MatToolbarModule

    ]
})
export class HeaderModule { }