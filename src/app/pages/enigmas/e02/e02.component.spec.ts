import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E02Component } from './e02.component';

describe('E02Component', () => {
  let component: E02Component;
  let fixture: ComponentFixture<E02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
