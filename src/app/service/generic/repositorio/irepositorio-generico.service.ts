import { Observable } from 'rxjs';

export interface IRepository<T> {
  getAll(url: string): Observable<T>;
  getById(url: string, id: string): Observable<T>;
  create(url: string, item: T): Observable<T>;
  update(url: string, id: string, item: T): Observable<T>;
}
