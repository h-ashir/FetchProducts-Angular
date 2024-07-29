import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';
import { BtnComponent } from "../btn/btn.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
  @Input() item:Product = {} as Product;
  
  @Output() btnClick = new EventEmitter<Product>();
  emitEvent(){
    this.btnClick.emit(this.item);
  }
  
  constructor(private router: Router){}
  goNextPage(){
    console.log(`Clicked on ${this.item.title}`);
    // this.router.navigate(['/product/id']);
    this.router.navigate([`/product/${this.item.id}`]);
  }

}
