import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSideBarComponent } from './date-side-bar.component';

describe('DateSideBarComponent', () => {
  let component: DateSideBarComponent;
  let fixture: ComponentFixture<DateSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
