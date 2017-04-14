import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngedruktVandaagComponent } from './ingedrukt-vandaag.component';

describe('IngedruktVandaagComponent', () => {
  let component: IngedruktVandaagComponent;
  let fixture: ComponentFixture<IngedruktVandaagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngedruktVandaagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngedruktVandaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
