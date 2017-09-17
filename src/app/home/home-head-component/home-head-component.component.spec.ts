import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadComponentComponent } from './home-head-component.component';

describe('HomeHeadComponentComponent', () => {
  let component: HomeHeadComponentComponent;
  let fixture: ComponentFixture<HomeHeadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
