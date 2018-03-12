import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmovablesAddComponent } from './immovables-add.component';

describe('ImmovablesAddComponent', () => {
  let component: ImmovablesAddComponent;
  let fixture: ComponentFixture<ImmovablesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmovablesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmovablesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
