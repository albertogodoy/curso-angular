import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOuputExampleComponent } from './input-ouput-example.component';

describe('InputOuputExampleComponent', () => {
  let component: InputOuputExampleComponent;
  let fixture: ComponentFixture<InputOuputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOuputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputOuputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
