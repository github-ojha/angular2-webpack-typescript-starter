import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id.toString(),  //removed selector as it is going to be used by routing now
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Products List";
    imageWidth: number = 50;
    imageMargin: number = 50;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[];
    errorMessage: string = ''
    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle += message;
    }
}