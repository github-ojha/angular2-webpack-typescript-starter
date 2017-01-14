import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product.filter.pipe';
import { StarComponent } from './shared/star.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path : 'products', component : ProductListComponent },
    {path : 'product:id', component : ProductDetailComponent },
    {path : 'welcome', component : WelcomeComponent },
    {path : '', redirectTo : 'welcome', pathMatch : 'full'},
    {path : "**", redirectTo : 'notfound', pathMatch : 'full'}
    ])
  ],
  declarations: [
    AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, ProductDetailComponent, WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
