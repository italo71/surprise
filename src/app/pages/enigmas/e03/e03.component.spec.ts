import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E03Component } from './e03.component';

describe('E03Component', () => {
  let component: E03Component;
  let fixture: ComponentFixture<E03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
