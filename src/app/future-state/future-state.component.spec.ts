import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureStateComponent } from './future-state.component';

describe('FutureStateComponent', () => {
  let component: FutureStateComponent;
  let fixture: ComponentFixture<FutureStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
