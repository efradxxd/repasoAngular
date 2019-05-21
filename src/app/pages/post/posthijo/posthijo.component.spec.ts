import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthijoComponent } from './posthijo.component';

describe('PosthijoComponent', () => {
  let component: PosthijoComponent;
  let fixture: ComponentFixture<PosthijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosthijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosthijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
