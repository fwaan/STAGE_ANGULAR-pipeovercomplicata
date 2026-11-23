import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtentiStatistiche } from './utenti-statistiche';

describe('UtentiStatistiche', () => {
  let component: UtentiStatistiche;
  let fixture: ComponentFixture<UtentiStatistiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentiStatistiche],
    }).compileComponents();

    fixture = TestBed.createComponent(UtentiStatistiche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
