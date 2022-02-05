import { Credenciais } from "./../../models/credenciais";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: "",
    senha: "",
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  logar() {
    this.toastr.error("Usuário ou senha inválidos!", 'Login');
    // this.creds.senha = '';
  }

  validaCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }
}
