import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCondensedComponent } from './tables-condensed.component';

describe('TablesCondensedComponent', () => {
  let component: TablesCondensedComponent;
  let fixture: ComponentFixture<TablesCondensedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesCondensedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesCondensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
