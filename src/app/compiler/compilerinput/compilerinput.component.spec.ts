import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerinputComponent } from './compilerinput.component';

describe('CompilerinputComponent', () => {
  let component: CompilerinputComponent;
  let fixture: ComponentFixture<CompilerinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
