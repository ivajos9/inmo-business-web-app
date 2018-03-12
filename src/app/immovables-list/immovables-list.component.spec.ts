import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmovablesListComponent } from './immovables-list.component';

describe('ImmovablesListComponent', () => {
  let component: ImmovablesListComponent;
  let fixture: ComponentFixture<ImmovablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmovablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmovablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
