import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelTableComponent } from './second-level-table.component';

describe('SecondLevelTableComponent', () => {
  let component: SecondLevelTableComponent;
  let fixture: ComponentFixture<SecondLevelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLevelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLevelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
