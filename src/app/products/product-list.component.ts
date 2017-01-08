import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle: string = "Products List";
    imageWidth: number = 50;
    imageMargin: number = 50;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products : IProduct[];
    constructor(private _productService : ProductService){
           this.products =  this._productService.getProducts();
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle += message;
    }
}