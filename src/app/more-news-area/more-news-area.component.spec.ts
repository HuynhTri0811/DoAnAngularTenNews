import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreNewsAreaComponent } from './more-news-area.component';

describe('MoreNewsAreaComponent', () => {
  let component: MoreNewsAreaComponent;
  let fixture: ComponentFixture<MoreNewsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreNewsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreNewsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
