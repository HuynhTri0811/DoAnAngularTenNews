import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNewsEvaluateTabComponentComponent } from './information-news-evaluate-tab-component.component';

describe('InformationNewsEvaluateTabComponentComponent', () => {
  let component: InformationNewsEvaluateTabComponentComponent;
  let fixture: ComponentFixture<InformationNewsEvaluateTabComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationNewsEvaluateTabComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNewsEvaluateTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
