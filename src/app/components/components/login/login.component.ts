import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password' 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  value!: string
  

  constructor() {}

  ngOnInit(): void {
    
  }

}

