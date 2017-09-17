import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentComponentComponent } from './home-content-component.component';

describe('HomeContentComponentComponent', () => {
  let component: HomeContentComponentComponent;
  let fixture: ComponentFixture<HomeContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
