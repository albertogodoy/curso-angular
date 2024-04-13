import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswicthExampleComponent } from './ngswicth-example.component';

describe('NgswicthExampleComponent', () => {
  let component: NgswicthExampleComponent;
  let fixture: ComponentFixture<NgswicthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswicthExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgswicthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
