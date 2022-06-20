import { HeadComponent } from './head/head.component';
import { CartComponent } from './cart/cart.component';

import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { ObserversModule } from '@angular/cdk/observers';
//import { ProductsComponent } from './paginas/productos/products.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadComponent,
    CartComponent
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ObserversModule,
    MatToolbarModule,
    MaterialModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
