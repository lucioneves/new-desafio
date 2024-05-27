import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { EnventComponent } from './pages/envent/envent.component';
import { CarreiraComponent } from './pages/carreira/carreira.component';
import { VagasComponent } from './pages/vagas/vagas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path:'header', component: HeaderComponent},
    { path: 'envet', component: EnventComponent},
    { path: 'carreira', component: CarreiraComponent},
    { path: 'vagas', component: VagasComponent}
] 
    
