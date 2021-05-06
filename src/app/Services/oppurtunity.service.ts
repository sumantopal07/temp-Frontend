import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import OppModel from '../Models/OppModel.model';

@Injectable({
  providedIn: 'root',
})
export class OppurtunityService {
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  private apiServerUrl = environment.BaseUrl;

  private id: number;
  private formBuilder: any;

  form: FormGroup = new FormGroup({
    _key: new FormControl(null),
    id: new FormControl(null),
    client: new FormControl('', Validators.required),
    date: new FormControl(''),
    demand: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    min_exp: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    skill: new FormControl(''),
  });

  public getOpps(): Observable<OppModel[]> {
    return this.http.get<OppModel[]>(`${this.apiServerUrl}/getOppurtunities`);
  }

  public deleteOpps(oppId: number): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/delete`, oppId, {
      responseType: 'json',
    });
  }

  setId = (opp: OppModel): void => {
    this.id = opp.oppId;
  }

  getId = (): number => this.id;

  initializeFormGroup(): void {
    this.form.setValue({
      _key: null,
      id: null,
      email : null,
      client: null,
      date: null,
      demand: null,
      description: null,
      min_exp: null,
      location: null,
      skill: null,
    });
  }
  populateForm(opp: OppModel, id: number): void {
    this.form.setValue({
      _key: id,
      id: opp.oppId,
      email : opp.user.email,
      client: opp.client,
      date: opp.date,
      demand: opp.demand,
      description: opp.description,
      min_exp: opp.min_exp,
      location: opp.location,
      skill: opp.skill,
    });
  }
  populateFormId(opp): void {
    this.id = opp.id;
  }
}
