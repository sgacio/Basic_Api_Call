import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAPICallComponent } from './test-apicall.component';

describe('TestAPICallComponent', () => {
  let component: TestAPICallComponent;
  let fixture: ComponentFixture<TestAPICallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAPICallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAPICallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
