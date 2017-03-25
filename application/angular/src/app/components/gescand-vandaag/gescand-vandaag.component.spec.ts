import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GescandVandaagComponent } from './gescand-vandaag.component';

describe('GescandVandaagComponent', () => {
  let component: GescandVandaagComponent;
  let fixture: ComponentFixture<GescandVandaagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GescandVandaagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GescandVandaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
