import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import OppModel from '../Models/OppModel.model';

@Injectable({
  providedIn: 'root'
})
export class OppurtunityService {

  private apiServerUrl = environment.BaseUrl;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getOpps(): Observable<OppModel[]>{
    return this.http.get<OppModel[]>(`${this.apiServerUrl}/getOppurtunities`);
  }
}
