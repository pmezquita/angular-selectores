import {Injectable} from '@angular/core';
import {Country, Region, SmallCountry} from "../interfaces/country.interface";
import {map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
  }

  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  private baseUrl = 'https://restcountries.com/v3.1';

  get regions(): Region[] {
    return [...this._regions];
  }

  public getCountriesByRegion = (region: Region): Observable<SmallCountry[]> => {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.map(
            ({cca3, borders, name}) => ({
              name: name.common,
              cca3,
              borders: borders ?? [],
            })
          )
        ),
      );
  }

  public getCountriesByAlphaCode = (alphaCode: string): Observable<SmallCountry> => {
    if (!alphaCode) return of(<SmallCountry>{});

    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url)
      .pipe(
        map(country => ({
            name: country.name.common,
            cca3: country.cca3,
            borders: country.borders ?? [],
          })
        ));
  }
}
