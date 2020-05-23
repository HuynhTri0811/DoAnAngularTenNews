import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryVnComponent } from './gallery-vn.component';

describe('GalleryVnComponent', () => {
  let component: GalleryVnComponent;
  let fixture: ComponentFixture<GalleryVnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryVnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryVnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
