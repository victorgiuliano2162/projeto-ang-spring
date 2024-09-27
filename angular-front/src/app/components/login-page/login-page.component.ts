import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      _id: [''],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required,],
      produtos: []

    });

  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    console.log("Erro");
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onLogin() {
    console.log("chamou login")
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe(
        response => {

        },
        error => {
          this.onError(error)
        }
      )
    }
  }

  onRegister() {
    console.log("Registrou");
    this.router.navigate(['new'])
  }

  onCancel() {
    console.log("Cancelou");

  }



}
