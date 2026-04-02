import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child21 } from './child21';

describe('Child21', () => {
  let component: Child21;
  let fixture: ComponentFixture<Child21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child21],
    }).compileComponents();

    fixture = TestBed.createComponent(Child21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
