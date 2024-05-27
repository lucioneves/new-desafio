import { Component, OnInit } from '@angular/core';
import { AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, AvatarGroupModule, ButtonModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit {
 

  constructor(private router: Router) {}

  redirectToAppEvent() {
      this.router.navigate(['/envet'])
    }

 

    ngOnInit() {
     
    }

}
