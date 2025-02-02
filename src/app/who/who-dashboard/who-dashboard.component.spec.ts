import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoDashboardComponent } from './who-dashboard.component';

describe('WhoDashboardComponent', () => {
  let component: WhoDashboardComponent;
  let fixture: ComponentFixture<WhoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
