import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependencyproviders } from './dependencyproviders';

describe('Dependencyproviders', () => {
  let component: Dependencyproviders;
  let fixture: ComponentFixture<Dependencyproviders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dependencyproviders],
    }).compileComponents();

    fixture = TestBed.createComponent(Dependencyproviders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
