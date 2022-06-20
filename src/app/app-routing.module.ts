import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ProductsComponent } from './paginas/productos/products.component';


const routes: Routes = [
  {path: 'products', loadChildren:
      () => import('./pages/products/products.module')
        .then(m => m.ProductsModule)
  },
  {path: 'header', loadChildren:
      () => import('./header/header.module')
        .then(m => m.HeaderModule)
  },
  {path: 'inicio', component: InicioComponent},
  //{path: '', redirectTo: '/products', pathMatch:'full'},
  {path: 'checkout', loadChildren:
      () => import('./pages/checkout/checkout.module')
      .then(m => m.CheckoutModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
