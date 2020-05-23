import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalAndLifeStyleTwoComponent } from './international-and-life-style-two.component';

describe('InternationalAndLifeStyleTwoComponent', () => {
  let component: InternationalAndLifeStyleTwoComponent;
  let fixture: ComponentFixture<InternationalAndLifeStyleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalAndLifeStyleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalAndLifeStyleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
