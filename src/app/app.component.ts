import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/components/login/login.component";
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      LoginComponent, 
      ReactiveFormsModule, 
     
    
    ]
})
export class AppComponent {
  title = 'desafiocursos';
}
