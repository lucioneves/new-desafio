import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [AvatarModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './vagas.component.html',
  styleUrl: './vagas.component.css'
})
export class VagasComponent implements OnInit{

  formulario!: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      matricula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      curriculo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }

  redirectToAppEvent() {
    this.router.navigate(['/vagas'])
  }
}
