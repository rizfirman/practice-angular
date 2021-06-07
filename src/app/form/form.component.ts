import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  input: Array<string> = [];
  sorting: boolean = false;
  sortColumn = 'name';
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.input);
    this.input.push(this.userForm.value);
    this.userForm.reset();
    alert('Success!');
  }
  deleteMsg(index) {
    let cnfrm = confirm('Are you sure?');
    if (cnfrm == true) {
      this.input.splice(this.input.indexOf(index), 1);
    } else {
      false;
    }
  }
  sortData(column) {
    this.sorting = this.sortColumn === column ? !this.sorting : false;

    this.sortColumn = column;
  }

  // getSortClass(column) {
  //   if (this.sortColumn == column) {
  //     return this.sorting ? 'arrow-down' : 'arrow-up';
  //   }
  //   return '';
  // }
}
