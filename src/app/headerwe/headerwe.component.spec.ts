import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderweComponent } from './headerwe.component';

describe('HeaderweComponent', () => {
  let component: HeaderweComponent;
  let fixture: ComponentFixture<HeaderweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
