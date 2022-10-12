import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepolluComponent } from './pagepollu.component';

describe('PagepolluComponent', () => {
  let component: PagepolluComponent;
  let fixture: ComponentFixture<PagepolluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagepolluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepolluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
