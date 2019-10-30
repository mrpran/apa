import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationEstateComponent } from './application-estate.component';

describe('ApplicationEstateComponent', () => {
  let component: ApplicationEstateComponent;
  let fixture: ComponentFixture<ApplicationEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
