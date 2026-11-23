import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtentiLayout } from './utenti-layout';

describe('UtentiLayout', () => {
  let component: UtentiLayout;
  let fixture: ComponentFixture<UtentiLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentiLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(UtentiLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
