import { Component, OnInit, inject } from '@angular/core';
import { UtentiService } from '../../services/utenteservice';
import { Utente } from '../../models/utente';

@Component({
  imports: [],
  selector: 'app-utenti-statistiche',
  styleUrl: './utenti-statistiche.css',
  templateUrl: './utenti-statistiche.html',
})
export class UtentiStatisticheComponent implements OnInit {
  private utentiService = inject(UtentiService);
  utenti: Utente[] = [];

  get etaMedia(): string{
    if (!this.utenti.length) return '0';
    const somma = this.utenti.reduce((acc, u) => acc + Number(u.eta), 0);
    return (somma / this.utenti.length).toFixed(1);
  }

  ngOnInit(): void {
    this.utentiService.getUtenti().subscribe({
      next: (data) => (this.utenti = data),
      error: (err) => console.error('Errore caricamento utenti:', err)
    });
  }
}
