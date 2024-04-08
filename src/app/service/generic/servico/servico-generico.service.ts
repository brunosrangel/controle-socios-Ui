import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepository } from '../repositorio/irepositorio-generico.service';
import { IService } from './iservico-generico.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> implements IService<T> {
  constructor(@Inject('IRepositoryToken') private repository: IRepository<T>) {}

  getAll(url: string): Observable<T> {
    return this.repository.getAll(url);
  }

  getById(url: string, id: string): Observable<T> {
    return this.repository.getById(url, id);
  }

  create(url: string, item: T): Observable<T> {
    return this.repository.create(url, item);
  }

  update(url: string, id: string, item: T): Observable<T> {
    return this.repository.update(url, id, item);
  }

}
