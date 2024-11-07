import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteFoodComponent } from './favourite-food.component';

describe('FavouriteFoodComponent', () => {
  let component: FavouriteFoodComponent;
  let fixture: ComponentFixture<FavouriteFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
