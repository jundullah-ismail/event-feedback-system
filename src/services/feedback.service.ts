import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../app/academy/todo.model';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  console.log('constructor is working, yay');
  }

  findTodos(): Observable<Todo[]> {
    console.log('findTodos is working, yay');

    return this.http.get<Todo[]>('data/todos.json');

  }

  findTodo(): Observable<Todo> {
    console.log('findTodo is working, weee');

    return this.http.get<Todo>('data/todo.json');
  }

}
