import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSponsors } from './section-sponsors';

describe('SectionSponsors', () => {
  let component: SectionSponsors;
  let fixture: ComponentFixture<SectionSponsors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSponsors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSponsors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
