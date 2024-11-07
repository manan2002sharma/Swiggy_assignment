import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableRestCardComponent } from './resuable-rest-card.component';

describe('ResuableRestCardComponent', () => {
  let component: ResuableRestCardComponent;
  let fixture: ComponentFixture<ResuableRestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuableRestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResuableRestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
