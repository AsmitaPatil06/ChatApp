import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherProfComponent } from './another-prof.component';

describe('AnotherProfComponent', () => {
  let component: AnotherProfComponent;
  let fixture: ComponentFixture<AnotherProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
