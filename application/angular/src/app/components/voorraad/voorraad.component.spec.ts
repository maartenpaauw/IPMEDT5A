import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorraadComponent } from './voorraad.component';

describe('VoorraadComponent', () => {
  let component: VoorraadComponent;
  let fixture: ComponentFixture<VoorraadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoorraadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorraadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
