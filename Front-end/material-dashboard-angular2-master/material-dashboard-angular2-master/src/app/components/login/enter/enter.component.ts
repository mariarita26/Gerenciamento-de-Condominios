import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from 'app/service/conta.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  hide: boolean = true;

  login = {
    email: '',
    password: '',
  }

  loginForm: FormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]]
	})

  constructor(
    private contaService: ContaService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.contaService.login(this.login);
      console.log(`Login efetuado: ${result}`)
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }
}
