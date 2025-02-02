import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoRegistrationComponent } from './who-registration.component';

describe('WhoRegistrationComponent', () => {
  let component: WhoRegistrationComponent;
  let fixture: ComponentFixture<WhoRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
