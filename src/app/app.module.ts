import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product.filter.pipe';
import { StarComponent } from './shared/star.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path : 'products', component : ProductListComponent },
    {path : 'product:id', component : ProductDetailComponent },
    {path : 'welcome', component : WelcomeComponent },
    {path : 'customers', component : CustomerComponent },
    {path : '', redirectTo : 'welcome', pathMatch : 'full'},
    {path : "**", redirectTo : 'notfound', pathMatch : 'full'}
    ])
  ],
  declarations: [
    AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, ProductDetailComponent, WelcomeComponent, CustomerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
