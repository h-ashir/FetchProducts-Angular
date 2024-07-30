import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass, MatTableModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() text:string='Add task'
  @Input() title: string = 'ToDo List'

  displayedColumns: string[] = ['Done', 'Task', 'Action'];
  dataSource= new MatTableDataSource<Item>();

  toDoList : Item[]=[]
  newTask: string = ''

  @ViewChild('toDoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

  constructor() { }

  ngOnInit() {
      const storedTodoList = sessionStorage.getItem('toDoList');
      if (storedTodoList) {
          this.toDoList = JSON.parse(storedTodoList);
      }
  }
  addTask(text: string) {
    if (text.trim() !== '') {
        const newTodoItem: Item = {
            id: Date.now(),
            description: text.trim(),
            done: false
        };
        const updateTask = [...this.dataSource.data, newTodoItem]
        this.dataSource.data = updateTask;
        this.toDoList.push(newTodoItem);
        this.todoInputRef.nativeElement.value = '';
        this.saveTodoList();
      }
    }
    
    toggleCompleted(id: number) {
      const toDoItem = this.toDoList.find(item => item.id === id);
      if (toDoItem) {
        toDoItem.done = !toDoItem.done;
        this.saveTodoList();
      }
    }
    
    deleteTask(id: number): void {
      // this.toDoList = this.toDoList.filter(item => item.id !== id);
      const updateTask = this.dataSource.data.filter(item => item.id !== id);
      this.dataSource.data= updateTask;
      this.todoInputRef.nativeElement.value = '';
      this.saveTodoList();
}
saveTodoList(): void {
  sessionStorage.setItem('toDoList', JSON.stringify(this.toDoList));
}

}
