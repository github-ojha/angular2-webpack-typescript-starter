import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { ProductService } from '../../src/app/products/product.service'

@Component({
  selector: 'my-app',
  moduleId: module.id.toString(),
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = "Coffee Shop app";
}
