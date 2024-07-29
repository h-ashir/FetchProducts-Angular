import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { Product } from './interfaces/product';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "./ui/btn/btn.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { HeadingComponent } from "./ui/heading/heading.component";
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CommonModule, BtnComponent, NavbarComponent, HeadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-fetch-api-task';
  
  constructor(public api:HeroService){}
  

}
