import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitileComponent } from './titile.component';

describe('TitileComponent', () => {
  let component: TitileComponent;
  let fixture: ComponentFixture<TitileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
