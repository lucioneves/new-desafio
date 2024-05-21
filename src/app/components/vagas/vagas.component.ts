import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [AvatarModule, RouterModule],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})
export class VagasComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  redirectToAppEvent() {
    this.router.navigate(['/vagas'])
  }
}
