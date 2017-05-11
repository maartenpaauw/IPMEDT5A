import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoppelenComponent } from './koppelen.component';

describe('KoppelenComponent', () => {
  let component: KoppelenComponent;
  let fixture: ComponentFixture<KoppelenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoppelenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoppelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
