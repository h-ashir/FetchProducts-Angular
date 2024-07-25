import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() item!:Product;
}
