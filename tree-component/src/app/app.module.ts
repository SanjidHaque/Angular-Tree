import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewChildDialogComponent } from './dialogs/add-new-child-dialog/add-new-child-dialog.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatDialogModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicDirective} from './dynamic.directive';
import {TreeService} from './services/tree.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNewChildDialogComponent,
    ParentComponent,
    ChildComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    TreeService
  ],
  entryComponents: [
    ChildComponent,
    AddNewChildDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
