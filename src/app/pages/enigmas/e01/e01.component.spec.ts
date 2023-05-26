import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E01Component } from './e01.component';

describe('E01Component', () => {
  let component: E01Component;
  let fixture: ComponentFixture<E01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
