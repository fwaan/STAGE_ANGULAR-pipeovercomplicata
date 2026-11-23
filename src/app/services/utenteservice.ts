import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Utente } from "../models/utente";

@Injectable({ providedIn: 'root' })
export class UtentiService{
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/utenti';

    getUtenti(): Observable<Utente[]> {
        return this.http.get<Utente[]>(this.apiUrl);
    }
}