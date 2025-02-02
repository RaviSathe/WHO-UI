import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginRegistrationComponent } from './admin-login-registration.component';

describe('AdminLoginRegistrationComponent', () => {
  let component: AdminLoginRegistrationComponent;
  let fixture: ComponentFixture<AdminLoginRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLoginRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
