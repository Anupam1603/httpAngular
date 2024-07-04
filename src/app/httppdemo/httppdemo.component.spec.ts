import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppdemoComponent } from './httppdemo.component';

describe('HttppdemoComponent', () => {
  let component: HttppdemoComponent;
  let fixture: ComponentFixture<HttppdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttppdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttppdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
