import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerWrapperComponent } from './owner-wrapper.component';

describe('OwnerWrapperComponent', () => {
  let component: OwnerWrapperComponent;
  let fixture: ComponentFixture<OwnerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
