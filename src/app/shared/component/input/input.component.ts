import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective, FormControl } from '@angular/forms';

@Component({
  selector: 'do-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label = '';
  @Input() required = false;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() controlName = '';
  @Input() isEdit = true;

  control: FormControl | undefined;

  constructor(private formGroupDir: FormGroupDirective) {}

  ngOnInit() {
    this.control = this.formGroupDir.control?.get(
      this.controlName
    ) as FormControl;
  }
}
