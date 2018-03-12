import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmovablesEditComponent } from './immovables-edit.component';

describe('ImmovablesEditComponent', () => {
  let component: ImmovablesEditComponent;
  let fixture: ComponentFixture<ImmovablesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmovablesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmovablesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
