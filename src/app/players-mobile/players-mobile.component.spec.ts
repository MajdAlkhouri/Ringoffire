import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersMobileComponent } from './players-mobile.component';

describe('PlayersMobileComponent', () => {
  let component: PlayersMobileComponent;
  let fixture: ComponentFixture<PlayersMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
