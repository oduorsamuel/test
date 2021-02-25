import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products = [];
  credentials: any;
  totalprice: number;

  constructor(public appservice: AppService) { }

  ngOnInit(): void {
    this.credentials = JSON.parse(localStorage.getItem('credentials'));
    this.products = JSON.parse(localStorage.getItem('products'));
    this.totalprice = this.products.map((o) => Number(o.price)).reduce((a, c) => a + c);
    console.log(this.products);
    localStorage.removeItem('show');
  }

  delete(id) {
    this.products.splice(
      this.products.findIndex((i) => {
        return i._id === id;
      }),
      1
    );
    this.totalprice = this.products
    .map((o) => Number(o.price))
    .reduce((a, c) => a + c , 0);
    const count = this.products.length;
    console.log(count);
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('products', JSON.stringify(this.products));
  }

}
