import {Injectable} from '@angular/core';
import {Region} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() {
  }

  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  get regions(): Region[] {
    return [...this._regions];
  }
}
