import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  cart = [];
  showcart = false;
  newarray: any;

  constructor() { }

  products = [
    {_id: 1 , name: 'Electics Product 1', image: '5615854990.jpg', price: '33.00', discount: '34.00'},
    {_id: 2 , name: 'Electics Product 2', image: '5892565850.jpg', price: '35.00', discount: '56.00'},
    {_id: 3 , name: 'Electics Product 3', image: '5991713086.jpg', price: '36.00', discount: '57.00'},
    {_id: 4 , name: 'Electics Product 4', image: '6049281045.jpg', price: '38.00', discount: '39.00'},
    {_id: 5 , name: 'Electics Product 5', image: '6298374167.jpg', price: '38.00', discount: '70.00'},
    {_id: 6 , name: 'Electics Product 6', image: '6381079466.jpg', price: '37.00', discount: '60.00'},
    {_id: 7 , name: 'Electics Product 7', image: '6482952761.jpg', price: '31.00', discount: '61.00'},
    {_id: 8 , name: 'Electics Product 8', image: '6501906268.jpg', price: '33.00', discount: '64.00'},
    {_id: 9 , name: 'Electics Product 9', image: '5615854990.jpg', price: '33.00', discount: '34.00'},
    {_id: 9 , name: 'Electics Product 10', image: '5892565850.jpg', price: '35.00', discount: '56.00'},
    {_id: 11 , name: 'Electics Product 11', image: '5991713086.jpg', price: '36.00', discount: '57.00'},
    {_id: 12 , name: 'Electics Product 12', image: '6049281045.jpg', price: '38.00', discount: '39.00'},
  ];

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      console.log('cart', this.cart);
    }
  }

  search(name){
    // tslint:disable-next-line: prefer-const
    let obj = this.products.find(o => o.name === name);
    this.newarray.push(obj);
  }

  addtocart(product){
    const index = this.cart.findIndex(e => e._id === product._id);
    if (index === -1) {
      this.cart.push(product);
      const count = this.cart.length;
      console.log(count);
      localStorage.setItem('count', JSON.stringify(count));
      localStorage.setItem('products', JSON.stringify(this.cart));
    } else {
      this.products[index] = product;
      const count = this.cart.length;
      console.log(count);
      localStorage.setItem('count', JSON.stringify(count));
      localStorage.setItem('products', JSON.stringify(this.cart));
    }
  }

}
