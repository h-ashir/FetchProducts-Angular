import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';

export const routes: Routes = [
    {
        path: '', loadComponent:() => import ('./pages/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'contact', loadComponent:() => import ('./pages/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'district', loadComponent:() => import ('./pages/district/district.component').then((m) => m.DistrictComponent)
    },
    {
        path: 'todo', loadComponent:() => import ('./pages/todo/todo.component').then((m) => m.TodoComponent)
    },
    {
        path: 'login', loadComponent:() => import ('./pages/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'product/:id', loadComponent:() => import ('./pages/view-product/view-product.component').then((m) => m.ViewProductComponent)
    },
];
