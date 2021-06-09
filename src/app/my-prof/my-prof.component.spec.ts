import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfComponent } from './my-prof.component';

describe('MyProfComponent', () => {
  let component: MyProfComponent;
  let fixture: ComponentFixture<MyProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
