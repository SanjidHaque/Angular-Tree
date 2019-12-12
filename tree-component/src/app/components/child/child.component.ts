import {Component, Input, OnInit} from '@angular/core';
import {Root} from '../../models/root.model';
import {AddNewChildDialogComponent} from '../../dialogs/add-new-child-dialog/add-new-child-dialog.component';
import {Child} from '../../models/child.model';
import {MatDialog} from '@angular/material';
import {Parent} from '../../models/parent.model';
import {GrandChild} from '../../models/grand-child.model';
import {TreeService} from '../../services/tree.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('rootIndex') rootIndex: number;
  @Input('parentIndex') parentIndex: number;
  @Input('childIndex') childIndex: number;
  @Input('type') type: string;
  
  constructor(private dialog: MatDialog,
              private treeService: TreeService) { }


  ngOnInit() {}

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

        const root = this.treeService
          .roots
          .find(x => x.Name === result);

        if (root !== undefined) {
          alert('Resource already exists!');
          return;
        }

        this.treeService.roots.push(new Root(Math.random(), result, []));
      }

    });


  }

  addNewParent() {
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

        const parent = this.treeService
          .roots[this.rootIndex]
          .Parents
          .find(x => x.Name === result);

        if (parent !== undefined) {
          alert('Resource already exists!');
          return;
        }

        this.treeService
          .roots[this.rootIndex]
          .Parents.push(new Parent(Math.random(), result, []));
      }

    });
  }

  addNewChild() {
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

        const child = this.treeService
          .roots[this.rootIndex]
          .Parents[this.parentIndex]
          .Children
          .find(x => x.Name === result);

        if (child !== undefined) {
          alert('Resource already exists!');
          return;
        }

        this.treeService
          .roots[this.rootIndex]
          .Parents[this.parentIndex]
          .Children.push(new Child(Math.random(), result, []));
      }

    });
  }

  addNewGrandChild() {
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

        const grandChild = this.treeService
          .roots[this.rootIndex]
          .Parents[this.parentIndex]
          .Children[this.childIndex]
          .GrandChildren
          .find(x => x.Name === result);

        if (grandChild !== undefined) {
          alert('Resource already exists!');
          return;
        }


        this.treeService.roots[this.rootIndex]
          .Parents[this.parentIndex]
          .Children[this.childIndex]
          .GrandChildren
          .push(new GrandChild(Math.random(), result, []));
      }

    });
  }

  deleteRoot() {
    this.treeService.roots.splice(this.rootIndex, 1);
  }

  deleteParent() {
    this.treeService.roots[this.rootIndex]
      .Parents.splice(this.parentIndex, 1);
  }

  deleteChild() {
    this.treeService.roots[this.rootIndex]
      .Parents[this.parentIndex]
      .Children.splice(this.childIndex, 1);
  }
}
