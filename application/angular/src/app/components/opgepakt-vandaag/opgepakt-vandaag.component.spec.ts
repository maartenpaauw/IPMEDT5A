import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpgepaktVandaagComponent } from './opgepakt-vandaag.component';

describe('OpgepaktVandaagComponent', () => {
  let component: OpgepaktVandaagComponent;
  let fixture: ComponentFixture<OpgepaktVandaagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpgepaktVandaagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpgepaktVandaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
