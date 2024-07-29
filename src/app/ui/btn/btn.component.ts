import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() text: string="";
  @Input() cartBtn: boolean= false; 
  @Input() addBtn: boolean= false;

  @Output() btnClick = new EventEmitter<string>();
  
  emitEvent(){
    this.btnClick.emit();
  }

}
