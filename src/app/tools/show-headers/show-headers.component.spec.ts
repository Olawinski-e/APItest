import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeadersComponent } from './show-headers.component';

describe('ShowHeadersComponent', () => {
  let component: ShowHeadersComponent;
  let fixture: ComponentFixture<ShowHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
