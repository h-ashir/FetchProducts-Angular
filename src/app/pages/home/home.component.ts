import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../apphighlight.directive';
import { CardsComponent } from "../../ui/cards/cards.component";
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, HighlightDirective, CardsComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  text = Date.now();

  constructor(public http: HttpClient){}

  categorizedProducts: { [key: string]: Product[]} = {};

  async ngOnInit() {
    try {
      // this.http.get(("https://dummyjson.com/products").subscribe(data:any) => {
        
      // })
      // 
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
      console.log(this.categorizedProducts);
    } catch (error) {
      console.log(error);
    }
  }
 
  categorizeProducts(products: Product[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: Product[] });
  }
  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }
 
  getProductsByCategory(category: string): Product[] {
    return this.categorizedProducts[category];
  }

  productSelected(product: Product){
    alert(`Product ${product.title} selected`);
  }
}
