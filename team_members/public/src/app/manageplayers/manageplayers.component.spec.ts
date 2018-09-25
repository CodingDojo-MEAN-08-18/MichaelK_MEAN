import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageplayersComponent } from './manageplayers.component';

describe('ManageplayersComponent', () => {
  let component: ManageplayersComponent;
  let fixture: ComponentFixture<ManageplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
