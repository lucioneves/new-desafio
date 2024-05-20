import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-envent',
  standalone: true,
  imports: [AvatarModule, RouterModule],
  templateUrl: './envent.component.html',
  styleUrl: './envent.component.css'
})
export class EnventComponent implements OnInit{

  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  redirectToAppEvent() {
    this.router.navigate(['/login'])
  }


}
