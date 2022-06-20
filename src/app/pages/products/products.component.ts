import { ShoppingCartService } from './../../services/shopping-cart.service';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productSvc: ProductsService, private shoppingCartSvc:ShoppingCartService) { }

  //ngOnInit(): void{
  // this.productSvc.getProducts().pipe(tap(res => console.log(res))).subscribe()
  //}  
  //<... manera de imprimir datos de la API en consola. 

  ngOnInit(): void {
    this.productSvc.getProducts()
      .pipe(tap((products: Product[]) => this.products = products)).subscribe();
  }

  addToCart(product:Product): void{
    console.log('Agregado al carrito', product);
    this.shoppingCartSvc.udapteCart(product);
  }

}
