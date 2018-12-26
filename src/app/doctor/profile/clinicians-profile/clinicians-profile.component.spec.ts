import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniciansProfileComponent } from './clinicians-profile.component';

describe('CliniciansProfileComponent', () => {
  let component: CliniciansProfileComponent;
  let fixture: ComponentFixture<CliniciansProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliniciansProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniciansProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
