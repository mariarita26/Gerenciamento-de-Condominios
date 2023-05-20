import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaReadComponent } from './visita-read.component';

describe('VisitaReadComponent', () => {
  let component: VisitaReadComponent;
  let fixture: ComponentFixture<VisitaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
