import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBodyComponent } from './signup-body.component';

describe('SignupBodyComponent', () => {
  let component: SignupBodyComponent;
  let fixture: ComponentFixture<SignupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
