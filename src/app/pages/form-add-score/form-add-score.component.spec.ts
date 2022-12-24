import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddScoreComponent } from './form-add-score.component';

describe('FormAddScoreComponent', () => {
  let component: FormAddScoreComponent;
  let fixture: ComponentFixture<FormAddScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
