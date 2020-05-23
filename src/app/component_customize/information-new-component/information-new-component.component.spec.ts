import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationNewComponentComponent } from './information-new-component.component';

describe('InformationNewComponentComponent', () => {
  let component: InformationNewComponentComponent;
  let fixture: ComponentFixture<InformationNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
