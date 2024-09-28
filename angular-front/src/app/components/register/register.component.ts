import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      _id: [''],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      produtos: [],
    })
  }

  ngOnInit(): void {
  }

}
