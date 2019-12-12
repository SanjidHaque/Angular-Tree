import {Component, OnInit, DoCheck} from '@angular/core';

import {MatDialog} from '@angular/material';
import {AddNewChildDialogComponent} from '../../dialogs/add-new-child-dialog/add-new-child-dialog.component';
import {Parent} from '../../models/parent.model';
import {Root} from '../../models/root.model';
import {Child} from '../../models/child.model';
import {GrandChild} from '../../models/grand-child.model';
import {TreeService} from '../../services/tree.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck{
  roots: Root[] = [];

  constructor(private dialog: MatDialog,
              private treeService: TreeService) { }

  ngOnInit() {
    this.roots = this.treeService.roots;
  }

  ngDoCheck() {
    this.roots = this.treeService.roots;
  }

}
