import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPENTRYComponent } from './emp-entry.component';

describe('EMPENTRYComponent', () => {
  let component: EMPENTRYComponent;
  let fixture: ComponentFixture<EMPENTRYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPENTRYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPENTRYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
