import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivPrevComponent } from './hiv-prev.component';

describe('HivPrevComponent', () => {
  let component: HivPrevComponent;
  let fixture: ComponentFixture<HivPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
