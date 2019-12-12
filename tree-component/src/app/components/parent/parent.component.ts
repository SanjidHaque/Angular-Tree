import {Component} from '@angular/core';

import {MatDialog} from '@angular/material';
import {AddNewChildDialogComponent} from '../../dialogs/add-new-child-dialog/add-new-child-dialog.component';
import {Parent} from '../models/parent.model';
import {Root} from '../models/root.model';
import {Child} from '../models/child.model';
import {GrandChild} from '../models/grand-child.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  roots: Root[] = [];
  constructor(private dialog: MatDialog) { }


  addNewRoot() {
    const dialogRef = this.dialog.open(AddNewChildDialogComponent,
          {
            hasBackdrop: true,
            disableClose: true,
            width: '450px',
            data:
              {
                name: ''
              }
          });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== '') {

        const root = this.roots.find(x => x.Name === result);

        if (root !== undefined) {
          alert('Resource already exists!');
        }

        this.roots.push(new Root(Math.random(), result, []));
      }

    });


  }

  addNewParent(rootIndex: number) {
    const dialogRef = this.dialog.open(AddNewChildDialogComponent,
      {
        hasBackdrop: true,
        disableClose: true,
        width: '450px',
        data:
          {
            name: ''
          }
      });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== '') {
        this.roots[rootIndex]
          .Parents.push(new Parent(Math.random(), result, []));
      }

    });
  }

  addNewChild(rootIndex: number, parentIndex: number) {
    const dialogRef = this.dialog.open(AddNewChildDialogComponent,
      {
        hasBackdrop: true,
        disableClose: true,
        width: '450px',
        data:
          {
            name: ''
          }
      });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== '') {
        this.roots[rootIndex]
          .Parents[parentIndex]
          .Children.push(new Child(Math.random(), result, []));
      }

    });
  }

  addNewGrandChild(rootIndex: number, parentIndex: number, childIndex: number) {
    const dialogRef = this.dialog.open(AddNewChildDialogComponent,
      {
        hasBackdrop: true,
        disableClose: true,
        width: '450px',
        data:
          {
            name: ''
          }
      });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== '') {
        this.roots[rootIndex]
          .Parents[parentIndex]
          .Children[childIndex]
          .GrandChildren.push(new GrandChild(Math.random(), result, []));
      }

    });
  }

  deleteRoot(rootIndex: number) {
    this.roots.splice(rootIndex, 1);
  }

  deleteParent(rootIndex: number, parentIndex: number) {
    this.roots[rootIndex].Parents.splice(parentIndex, 1);
  }

  deleteChild(rootIndex: number, parentIndex: number, childIndex: number) {
    this.roots[rootIndex].Parents[parentIndex].Children.splice(childIndex, 1);
  }

}
