import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[] | any;
  constructor(
    private httpService : ConfigService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.httpService.getTodos().subscribe((data : any) => {
      this.todos = data.data;
    });
  }

  deleteTodo(id : number){
    this.httpService.deleteTodos(id).subscribe(data => {

    })
  }
}
