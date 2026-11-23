import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CriteriFiltro, FiltroGenericoPipe } from '../../pipes/custom-pipe';
import { UtentiService } from '../../services/utenteservice';
import { Utente } from '../../models/utente';

@Component({
  imports: [CommonModule, ReactiveFormsModule, FiltroGenericoPipe],
  selector: 'app-utenti-lista',
  styleUrl: './utenti-lista.css',
  templateUrl: './utenti-lista.html',
})
export class UtentiListaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private utentiService = inject(UtentiService);

  utenti: Utente[] = [];
  
  filtroForm = this.fb.group({
    nome:[''],
    cognome: [''],
    eta: [null as number | null]
  });

  filtriAttivi: CriteriFiltro<Utente> = {};

  ngOnInit(): void{
    this.utentiService.getUtenti().subscribe({
      next: (data) => (this.utenti = data),
      error: (err) => console.error('Errore caricamento utenti :', err)
    });

    this.filtroForm.valueChanges.subscribe((valori) => {
      this.filtriAttivi = {
        nome: valori.nome ?? '',
        cognome: valori.cognome ?? '',
        eta: valori.eta !== null && valori.eta !== undefined && String(valori.eta) !== '' ? Number(valori.eta) : null
      };
    });
  }

  resetFiltri(): void {
    this.filtroForm.reset({
      nome: '',
      cognome: '',
      eta: null
    });
  }
}