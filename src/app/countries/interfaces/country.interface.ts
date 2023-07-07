export enum Region {
  Africa    = 'Africa',
  Americas  = 'Americas',
  Asia      = 'Asia',
  Europe    = 'Europe',
  Oceania    = 'Oceania',
}

export interface SmallCountry{
  name:   string;
  cca3:   string;
  border: string[];
}

export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  srp?: string;
  cat?: string;
  ukr?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  eng?: string;
  fra?: string;
  nrf?: string;
  mlt?: string;
  bel?: string;
  rus?: string;
  fin?: string;
  swe?: string;
  mkd?: string;
  de?:  string;
  spa?: string;
  hun?: string;
  ces?: string;
  slk?: string;
  bul?: string;
  cnr?: string;
  est?: string;
  deu?: string;
  ltz?: string;
  dan?: string;
  fao?: string;
  sqi?: string;
  ita?: string;
  nld?: string;
  nor?: string;
  ron?: string;
  lit?: string;
  isl?: string;
  lat?: string;
  gle?: string;
  slv?: string;
  ell?: string;
  hrv?: string;
  nfr?: string;
  pol?: string;
  lav?: string;
  bos?: string;
  por?: string;
  gsw?: string;
  roh?: string;
  glv?: string;
  tur?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
