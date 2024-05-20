import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnventComponent } from './envent.component';

describe('EnventComponent', () => {
  let component: EnventComponent;
  let fixture: ComponentFixture<EnventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
