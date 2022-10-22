import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrzyzowkaComponent } from './krzyzowka.component';

describe('KrzyzowkaComponent', () => {
  let component: KrzyzowkaComponent;
  let fixture: ComponentFixture<KrzyzowkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrzyzowkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrzyzowkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
