import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have property core containimg 'Core'`, async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const core = fixture.debugElement.componentInstance;
    expect(core.core).toContain('Core');
  }));

  it(`should have property base containing 'Base'`, async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    const core = fixture.debugElement.componentInstance;
    expect(core.base).toContain('Base');
  }));

  it('should have core in <md-card-title>', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const core = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-title').textContent).toEqual(core.core);
  }));

  it('should have base in <md-card-subtitle>', async(() => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const core = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-subtitle').textContent).toEqual(core.base);
  }));
});
