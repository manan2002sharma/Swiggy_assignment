import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableFoodCardComponent } from './resuable-food-card.component';

describe('ResuableFoodCardComponent', () => {
  let component: ResuableFoodCardComponent;
  let fixture: ComponentFixture<ResuableFoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuableFoodCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResuableFoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
