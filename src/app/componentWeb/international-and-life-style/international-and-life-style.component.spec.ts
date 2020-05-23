import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalAndLifeStyleComponent } from './international-and-life-style.component';

describe('InternationalAndLifeStyleComponent', () => {
  let component: InternationalAndLifeStyleComponent;
  let fixture: ComponentFixture<InternationalAndLifeStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalAndLifeStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalAndLifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
