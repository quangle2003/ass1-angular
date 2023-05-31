import { Component } from '@angular/core';
import {products} from 'src/app/datas/products'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = products;
}
