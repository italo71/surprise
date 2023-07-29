import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H01Component } from './h01.component';

describe('H01Component', () => {
  let component: H01Component;
  let fixture: ComponentFixture<H01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
