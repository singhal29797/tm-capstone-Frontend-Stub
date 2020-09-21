import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BWBComponent } from './bwb.component';

describe('BWBComponent', () => {
  let component: BWBComponent;
  let fixture: ComponentFixture<BWBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BWBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BWBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
