import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepository } from './irepositorio-generico.service';

@Injectable({
  providedIn: 'root'
})
export class GenericRepository<T> implements IRepository<T> {
  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getById(url: string, id: string): Observable<T> {
    return this.http.get<T>(`${url}/${id}`);
  }

  create(url: string, item: T): Observable<T> {
    return this.http.post<T>(url, item);
  }

  update(url: string,id: string ,item: T): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, item);
  }
  // Adicione outros métodos conforme necessário
}
