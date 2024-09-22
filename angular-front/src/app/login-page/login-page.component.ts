import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    
  ) {
    this.loginForm = this.fb.group([

    ])
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
