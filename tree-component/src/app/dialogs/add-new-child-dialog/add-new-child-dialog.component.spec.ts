import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewChildDialogComponent } from './add-new-child-dialog.component';

describe('AddNewChildDialogComponent', () => {
  let component: AddNewChildDialogComponent;
  let fixture: ComponentFixture<AddNewChildDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewChildDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewChildDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
