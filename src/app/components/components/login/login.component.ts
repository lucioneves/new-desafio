import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  formulario!: FormGroup;
  
  isPasswordVisible: { [key: string]: boolean } = { senha: true };

 constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      matricula: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8), 
        Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*])')
      ]]
    })
  }

  onSubmit() {
    if(this.formulario.valid) {
      console.log('Formulario validoi:', this,this.formulario.value);      
    } else{
      console.log('Forlario invalido');      
    }
  }

  onEntrarClick() {
    this.router.navigate(['/header'])
    console.log('Botão clicado');   
  }

  togglePasswordVisibility(field: string) {
    this.isPasswordVisible[field] = !this.isPasswordVisible[field];

    console.log('olho fechado')
  }
    

   

}

