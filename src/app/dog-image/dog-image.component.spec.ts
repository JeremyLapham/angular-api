import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImageComponent } from './dog-image.component';

describe('DogImageComponent', () => {
  let component: DogImageComponent;
  let fixture: ComponentFixture<DogImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogImageComponent]
    });
    fixture = TestBed.createComponent(DogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
