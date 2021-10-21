import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinetutComponent } from './machinetut.component';

describe('MachinetutComponent', () => {
  let component: MachinetutComponent;
  let fixture: ComponentFixture<MachinetutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinetutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinetutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
