import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host = 'http://localhost:8080';
  constructor(private http: HttpClient,) { }

  getProducts (): Observable<Product[]> {
    
   var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json'
   });
   let url = this.host+'/product/getAll';
    return this.http.get<Product[]>(url,{headers: reqHeader})
      .pipe(
        tap(todos => this.log('listando eventos')),
        catchError(this.handleError<Product[]>('erro ao listar eventos'))
      );
  }

  /*
  registerJob(data) {

    let postData = {
      active: true,
      title: data.value.title, 
      description: data.value.description,
      location: data.value.location,
      job_type: data.value.type,
      seniority: data.value.seniority,
      company : data.value.company,
      language : data.value.language,
      contact_email: data.value.contact_email,
      salary: data.value.salary,
      uniqueKey: data.value.company+"fdfd"+data.value.title,
      apply_url: data.value.apply_url
    }
    let urlLogin = this.host+'/job';
    return this.http.post(urlLogin, postData)
      .pipe(
        tap(user => this.log('Realizando login'))
      );
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
     console.log(`EventoService: ${message}`);
  }
}