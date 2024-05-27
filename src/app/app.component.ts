import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      LoginComponent, 
      ReactiveFormsModule,
      MenuModule,
      CommonModule,
      RouterModule,
      

    ]
})
export class AppComponent {
  title = 'desafiocursos';
}
