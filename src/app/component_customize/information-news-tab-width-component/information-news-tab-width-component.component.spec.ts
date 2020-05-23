import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNewsTabWidthComponentComponent } from './information-news-tab-width-component.component';

describe('InformationNewsTabWidthComponentComponent', () => {
  let component: InformationNewsTabWidthComponentComponent;
  let fixture: ComponentFixture<InformationNewsTabWidthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationNewsTabWidthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNewsTabWidthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
