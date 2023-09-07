import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../../services/countries.service";
import {Region, SmallCountry} from "../../interfaces/country.interface";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: []
})
export class SelectorPageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ) {
  }

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  public countriesByRegion: SmallCountry[] = [];
  public bordersByCountry: string[] = [];

  ngOnInit() {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  private onRegionChanged = (): void => {
    this.myForm.get('region')?.valueChanges
      .pipe(
        tap(() => this.myForm.get('country')?.setValue('')),
        tap(() => this.bordersByCountry = []),
        switchMap((region) => this.countriesService.getCountriesByRegion(region)),
      )
      .subscribe(countries => {
        this.countriesByRegion = countries;
      });
  }

  private onCountryChanged = (): void => {
    this.myForm.get('country')?.valueChanges
      .pipe(
        tap(() => this.myForm.get('border')?.setValue('')),
        switchMap((alphaCode) => this.countriesService.getCountriesByAlphaCode(alphaCode)),
      )
      .subscribe(country => {
        this.bordersByCountry = country.borders;
      });
  }

}
