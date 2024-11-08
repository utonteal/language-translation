import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private http: HttpClient) { }

  // Fetch translations from an API or localStorage
  getTranslations(language: string): Observable<any> {
    return this.http.get<any>('./assets/i18n.json')
  }


}
