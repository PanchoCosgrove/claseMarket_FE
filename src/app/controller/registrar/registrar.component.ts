import { Component } from '@angular/core';
import { RegistrarService } from '../../service/registrar.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  cliente : Cliente = new Cliente();
  constructor(private registrarService : RegistrarService){

  }

  registrar(){
    this.registrarService.registrar(this.cliente).subscribe({
      next : data => alert("Usuario Registrado"),
      error : err => alert("Usuario ya existe, no se pudo registrar!")
    });
  }
}
