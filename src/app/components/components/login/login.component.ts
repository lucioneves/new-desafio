import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  formulario!: FormGroup;
  
  isPasswordVisible: { [key: string]: boolean } = { senha: true, confirm_senha: false };

 constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      matricula: ['', Validators.required],
      password: ['', Validators.required]
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
    console.log('Botão clicado');   
  }

  togglePasswordVisibility(controlName: string){
    this.isPasswordVisible[controlName] = !this.isPasswordVisible[controlName];
    

    console.log('olho fechado');
    
  }

}

