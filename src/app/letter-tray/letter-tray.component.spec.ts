import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTrayComponent } from './letter-tray.component';

describe('LetterTrayComponent', () => {
  let component: LetterTrayComponent;
  let fixture: ComponentFixture<LetterTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
