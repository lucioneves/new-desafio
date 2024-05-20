import { Routes } from '@angular/router';
import { HeaderComponent } from './components/components/header/header.component';
import { LoginComponent } from './components/components/login/login.component';
import { EnventComponent } from './components/envent/envent.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path:'header', component: HeaderComponent},
    { path: 'envet', component: EnventComponent}
] 
    
