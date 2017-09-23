import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { LoginFormComponent } from './login-form.component';
import * as authActions from '../../actions/auth';
import * as authReducers from '../../reducers';
import { ReactiveFormsModule } from '@angular/forms';

describe('Login-Page', () => {
  let fixture: ComponentFixture<LoginFormComponent>;
  let instance: LoginFormComponent;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(LoginFormComponent);
    instance = fixture.componentInstance;
  });

  it('should compile', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should disable the form if pending', () => {
    instance.pending = true;
    expect(fixture).toMatchSnapshot();
  });

  it('should display an error message if provided', () => {
    instance.errorMessage = 'Invalid credentials';
    expect(fixture).toMatchSnapshot();
  });

  it('should emit event if form is valid when submitted', () => {
    const credentials = {
      username: 'user',
      password: 'pass',
    };
    instance.form.setValue(credentials);
    spyOn(instance.submitted, 'emit');
    instance.submit();
    expect(instance.submitted.emit).toHaveBeenCalledWith(credentials);
  });
});
