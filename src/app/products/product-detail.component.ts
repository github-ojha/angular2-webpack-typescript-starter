import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    moduleId: module.id.toString(),
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {

    pageTitle: string = "Product Details";
}