import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cashback } from './cashback';

describe('Cashback', () => {
  let component: Cashback;
  let fixture: ComponentFixture<Cashback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cashback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cashback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
