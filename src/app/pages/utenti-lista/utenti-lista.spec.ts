import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtentiLista } from './utenti-lista';

describe('UtentiLista', () => {
  let component: UtentiLista;
  let fixture: ComponentFixture<UtentiLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentiLista],
    }).compileComponents();

    fixture = TestBed.createComponent(UtentiLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
