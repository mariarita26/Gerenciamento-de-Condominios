import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ContaService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('token');
		this.router.navigate(['/login']);
	}
}
