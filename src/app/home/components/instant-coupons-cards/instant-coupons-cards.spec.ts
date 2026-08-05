import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantCouponsCards } from './instant-coupons-cards';

describe('InstantCouponsCards', () => {
  let component: InstantCouponsCards;
  let fixture: ComponentFixture<InstantCouponsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstantCouponsCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstantCouponsCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
