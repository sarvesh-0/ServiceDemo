import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloserviceComponent } from './helloservice.component';

describe('HelloserviceComponent', () => {
  let component: HelloserviceComponent;
  let fixture: ComponentFixture<HelloserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
