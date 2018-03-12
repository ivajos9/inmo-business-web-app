import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizedSalesComponent } from './realized-sales.component';

describe('RealizedSalesComponent', () => {
  let component: RealizedSalesComponent;
  let fixture: ComponentFixture<RealizedSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizedSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
