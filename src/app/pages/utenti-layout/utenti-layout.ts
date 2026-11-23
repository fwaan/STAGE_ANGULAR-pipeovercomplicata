import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-utenti-layout',
  styleUrl: './utenti-layout.css',
  templateUrl: './utenti-layout.html',
})
export class UtentiLayoutComponent {}
