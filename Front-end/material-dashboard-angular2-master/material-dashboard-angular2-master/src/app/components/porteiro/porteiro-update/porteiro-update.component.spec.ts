import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteiroUpdateComponent } from './porteiro-update.component';

describe('PorteiroUpdateComponent', () => {
  let component: PorteiroUpdateComponent;
  let fixture: ComponentFixture<PorteiroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteiroUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteiroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
