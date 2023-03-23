import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrescolunasComponent } from './trescolunas.component';

describe('TrescolunasComponent', () => {
  let component: TrescolunasComponent;
  let fixture: ComponentFixture<TrescolunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrescolunasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrescolunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
