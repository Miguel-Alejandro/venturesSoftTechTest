import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsTable } from './benefits-table';

describe('BenefitsTable', () => {
  let component: BenefitsTable;
  let fixture: ComponentFixture<BenefitsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
