import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderHierarchy } from './provider-hierarchy';

describe('ProviderHierarchy', () => {
  let component: ProviderHierarchy;
  let fixture: ComponentFixture<ProviderHierarchy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderHierarchy],
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderHierarchy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
