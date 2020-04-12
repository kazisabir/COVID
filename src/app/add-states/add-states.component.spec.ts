import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStatesComponent } from './add-states.component';

describe('AddStatesComponent', () => {
  let component: AddStatesComponent;
  let fixture: ComponentFixture<AddStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
