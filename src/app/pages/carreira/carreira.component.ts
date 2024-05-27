import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-carreira',
  standalone: true,
  imports: [AvatarModule, RouterModule],
  templateUrl: './carreira.component.html',
  styleUrl: './carreira.component.css'
})
export class CarreiraComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  redirectToAppEvent() {
    this.router.navigate(['/header'])
  }

}
