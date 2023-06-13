import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>(`${environment.API}/api/conta/login`, user).toPromise();
    if (result && result.access_token){
      localStorage.setItem('token', result.access_token);
      return true;
    }
    return false;
  }

  // async createAccount(account: any){
  //   const result = await this.http.post<any>(`${environment.API}/users`, account).toPromise();
  //   return result;
  // }
}
