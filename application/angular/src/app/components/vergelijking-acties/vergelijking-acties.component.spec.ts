import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VergelijkingActiesComponent } from './vergelijking-acties.component';

describe('VergelijkingActiesComponent', () => {
  let component: VergelijkingActiesComponent;
  let fixture: ComponentFixture<VergelijkingActiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VergelijkingActiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VergelijkingActiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
