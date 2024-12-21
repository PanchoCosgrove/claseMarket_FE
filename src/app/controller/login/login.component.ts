import { Cliente } from '../../model/Cliente';
import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string;
  password:string;
  client:Cliente;
  constructor(private loginService:LoginService){

  }
}
