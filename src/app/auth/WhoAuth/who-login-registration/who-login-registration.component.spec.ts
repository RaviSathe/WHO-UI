import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoLoginRegistrationComponent } from './who-login-registration.component';

describe('WhoLoginRegistrationComponent', () => {
  let component: WhoLoginRegistrationComponent;
  let fixture: ComponentFixture<WhoLoginRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoLoginRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
