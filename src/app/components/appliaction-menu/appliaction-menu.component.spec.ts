import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliactionMenuComponent } from './appliaction-menu.component';

describe('AppliactionMenuComponent', () => {
  let component: AppliactionMenuComponent;
  let fixture: ComponentFixture<AppliactionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliactionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliactionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
