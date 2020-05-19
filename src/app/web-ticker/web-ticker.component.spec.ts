import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTickerComponent } from './web-ticker.component';

describe('WebTickerComponent', () => {
  let component: WebTickerComponent;
  let fixture: ComponentFixture<WebTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
