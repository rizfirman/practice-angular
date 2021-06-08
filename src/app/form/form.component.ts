import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  input: Array<string> = [];
  sorting: boolean = false;
  sortColumn = 'name';
  userForm!: FormGroup;
  buttonActive = false;

  constructor(private fb: FormBuilder) {}

  ContactForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ContactForm();
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get name() {
    return this.userForm.get('name')!;
  }
  get subject() {
    return this.userForm.get('subject')!;
  }
  get message() {
    return this.userForm.get('message')!;
  }

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
