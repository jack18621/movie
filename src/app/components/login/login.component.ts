import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario=new UsuarioModel();
  constructor(private route:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.usuario.email==="andresjuan2001@gmail.com"){
      this.route.navigateByUrl
    }
  }

}
