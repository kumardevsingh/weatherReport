import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityComponentComponent } from './city-component.component';

describe('CityComponentComponent', () => {
  let component: CityComponentComponent;
  let fixture: ComponentFixture<CityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
