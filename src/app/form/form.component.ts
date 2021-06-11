import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { DataService } from '../service/data.service';

interface Data {
  name: string;
  email: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  input: Data[] = [];
  sorting: boolean = false;
  sortColumn = 'name';
  buttonActive = true;

  constructor(private dialog: MatDialog, private _dataService: DataService) {}

  ngOnInit(): void {}
  get dataList() {
    return this._dataService.getAllData();
  }

  addData(data: Data) {
    this.input.push(data);
  }
  editMsg(name: string) {
    this.buttonActive = false;
    const edit = this._dataService
      .getAllData()
      .find((data) => data.name === name);
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: edit,
    });
  }

  deleteMsg(name: string) {
    let cnfrm = confirm('Are you sure?');
    if (cnfrm == true) {
      this._dataService.deleteData(name);
    } else {
      false;
    }
  }
  sortData(column) {
    this.sorting = this.sortColumn === column ? !this.sorting : false;

    this.sortColumn = column;
  }
  openDialog() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // onSubmit() {
  //   console.log(this.input);
  //   this.input.push(this.userForm.value);
  //   this.userForm.reset();
  //   alert('Success!');
  // }

  // getSortClass(column) {
  //   if (this.sortColumn == column) {
  //     return this.sorting ? 'arrow-down' : 'arrow-up';
  //   }
  //   return '';
  // }
}
