import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhaListComponent } from './fha-list.component';

describe('FhaListComponent', () => {
  let component: FhaListComponent;
  let fixture: ComponentFixture<FhaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
