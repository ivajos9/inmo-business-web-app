import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FhaHistComponent } from './fha-hist.component';

describe('FhaHistComponent', () => {
  let component: FhaHistComponent;
  let fixture: ComponentFixture<FhaHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FhaHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhaHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
