import { Component, Input, OnInit } from '@angular/core';

import { ITask } from '../../../../../interfaces/task.interface';

@Component({
  selector: 'do-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;

  private editable = false;

  constructor() {}

  ngOnInit() {}

  public edit(): void {
    this.editable = !this.editable;
  }

  public delete(): void {
    console.log('delete');
  }

  public sendEdit(): void {
    console.log('enter', { old: this.task.description });
    this.editable = false;
  }
}
