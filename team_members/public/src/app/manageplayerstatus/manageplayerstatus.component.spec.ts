import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageplayerstatusComponent } from './manageplayerstatus.component';

describe('ManageplayerstatusComponent', () => {
  let component: ManageplayerstatusComponent;
  let fixture: ComponentFixture<ManageplayerstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageplayerstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageplayerstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
