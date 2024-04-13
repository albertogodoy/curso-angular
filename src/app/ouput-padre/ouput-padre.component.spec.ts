import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputPadreComponent } from './ouput-padre.component';

describe('OuputPadreComponent', () => {
  let component: OuputPadreComponent;
  let fixture: ComponentFixture<OuputPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuputPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuputPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
