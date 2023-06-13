import { Component, OnInit } from '@angular/core';
import { ContaService } from 'app/service/conta.service';
import { Router } from 'express';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {
  
  login = {
    email = '',
    password = ''
  };
  hide = true;
  
  constructor(
    private accountService: ContaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado com sucesso! ${result}`);

      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }

}
