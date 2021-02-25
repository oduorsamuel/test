import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  products = [];
  totalprice: any;

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('show');
    this.products = JSON.parse(localStorage.getItem('products'));
    this.totalprice = this.products.map((o) => Number(o.price)).reduce((a, c) => a + c);
  }

}
