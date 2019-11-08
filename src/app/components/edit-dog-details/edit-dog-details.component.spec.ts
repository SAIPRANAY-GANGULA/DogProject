import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDogDetailsComponent } from './edit-dog-details.component';

describe('EditDogDetailsComponent', () => {
  let component: EditDogDetailsComponent;
  let fixture: ComponentFixture<EditDogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
