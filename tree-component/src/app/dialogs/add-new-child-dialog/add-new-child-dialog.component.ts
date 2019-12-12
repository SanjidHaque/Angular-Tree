import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-new-child-dialog',
  templateUrl: './add-new-child-dialog.component.html',
  styleUrls: ['./add-new-child-dialog.component.css']
})
export class AddNewChildDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddNewChildDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
