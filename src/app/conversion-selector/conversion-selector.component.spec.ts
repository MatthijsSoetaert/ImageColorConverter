import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSelectorComponent } from './conversion-selector.component';

describe('ConversionSelectorComponent', () => {
  let component: ConversionSelectorComponent;
  let fixture: ComponentFixture<ConversionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
