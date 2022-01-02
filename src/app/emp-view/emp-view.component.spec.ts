import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPVIEWComponent } from './emp-view.component';

describe('EMPVIEWComponent', () => {
  let component: EMPVIEWComponent;
  let fixture: ComponentFixture<EMPVIEWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPVIEWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPVIEWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
