import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMenuPageComponent } from './rest-menu-page.component';

describe('RestMenuPageComponent', () => {
  let component: RestMenuPageComponent;
  let fixture: ComponentFixture<RestMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestMenuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
