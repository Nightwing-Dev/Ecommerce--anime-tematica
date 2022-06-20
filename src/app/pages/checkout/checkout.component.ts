import { DataService } from './../products/services/data.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from '../products/interface/stores.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: 'diego',
    store: '',
    shippingAddress: '',
    city: ''
  };

  isDelivery!: boolean;
  stores: Store[] = []
  

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }
  onPickUpOrDelivery(value:boolean):void{
    this.isDelivery = value;
  }
  onSubmit():void{
    console.log('guardar');
  }
  private getStores():void{
    this.dataSvc.getStores().pipe(tap((stores: Store[]) => this.stores = stores)).subscribe()
  }
}
