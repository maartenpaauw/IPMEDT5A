import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchappenComponent } from './schappen.component';

describe('SchappenComponent', () => {
  let component: SchappenComponent;
  let fixture: ComponentFixture<SchappenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchappenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
