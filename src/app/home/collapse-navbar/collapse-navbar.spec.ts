import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseNavbar } from './collapse-navbar';

describe('CollapseNavbar', () => {
  let component: CollapseNavbar;
  let fixture: ComponentFixture<CollapseNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapseNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
