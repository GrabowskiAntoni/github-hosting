import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrzyzowkaViewComponent } from './krzyzowka-view.component';

describe('KrzyzowkaViewComponent', () => {
  let component: KrzyzowkaViewComponent;
  let fixture: ComponentFixture<KrzyzowkaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrzyzowkaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrzyzowkaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
