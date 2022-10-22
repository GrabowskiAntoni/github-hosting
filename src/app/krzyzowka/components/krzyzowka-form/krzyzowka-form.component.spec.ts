import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrzyzowkaFormComponent } from './krzyzowka-form.component';

describe('KrzyzowkaFormComponent', () => {
  let component: KrzyzowkaFormComponent;
  let fixture: ComponentFixture<KrzyzowkaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrzyzowkaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrzyzowkaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
