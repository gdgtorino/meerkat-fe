import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLocation } from './section-location';

describe('SectionLocation', () => {
  let component: SectionLocation;
  let fixture: ComponentFixture<SectionLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
