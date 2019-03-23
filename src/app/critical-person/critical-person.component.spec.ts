import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalPersonComponent } from './critical-person.component';

describe('CriticalPersonComponent', () => {
  let component: CriticalPersonComponent;
  let fixture: ComponentFixture<CriticalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
