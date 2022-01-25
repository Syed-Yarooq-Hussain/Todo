import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../Todo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('http://localhost:3000/todo');
  }
  postTodos(todo: Todo) {
    return this.http.post('http://localhost:3000/todo' , todo );
  }
  updateTodos(todo: Todo) {
    return this.http.get('http://localhost:3000/todo');
  }
  deleteTodos(id: Number) {
    return this.http.delete(`http://localhost:3000/todo/${id}`);
  }


  
}