import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { BtnComponent } from "../../ui/btn/btn.component";
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HomeComponent } from '../home/home.component';
import { NgIf } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [BtnComponent, CardsComponent, HomeComponent, NgIf, NgOptimizedImage],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})

export class ViewProductComponent{

  // @Input() text: string = ''
  @Input() item: Product = {} as Product
  @Output() btnClick = new EventEmitter<Product>();

  emitEvent(){
    this.btnClick.emit(this.item);
    alert(`Successfully ordered ${this.item.title}`)
  }
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  isLoading:Boolean=false;
  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.isLoading=true
        this.item = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
  // productSelected(product: Product){
  //   alert(`${item.title}`)
  // } 
}