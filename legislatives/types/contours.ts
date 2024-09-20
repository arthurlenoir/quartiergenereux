import { Coordinate } from "ol/coordinate";

export interface PollingStationPropertiesI {
  code: string;
  codeDepartement: string;
  nomDepartement: string;
  codeCirconscription: string;
  nomCirconscription: string;
  codeCommune: string;
  nomCommune: string;
  numeroBureauVote: string;
  codeBureauVote: string;
  id_bv: string;

  nom: never;
}

export interface CityPropertiesI {
  code: string;
  nom: string;

  id_bv: never;
}

export interface DistrictPropertiesI {
  codeCirconscription: string;
  codeDepartement: string;
  nomCirconscription: string;
  nomDepartement: string;

  nom: never;
  id_bv: never;
}

export type FeaturePropertiesI =
  | PollingStationPropertiesI
  | CityPropertiesI
  | DistrictPropertiesI;

export const isPollingStationProperties = (
  props: FeaturePropertiesI
): props is PollingStationPropertiesI => {
  return "id_bv" in props;
};

export const isCityProperties = (
  props: FeaturePropertiesI
): props is CityPropertiesI => {
  return "nom" in props;
};

export const isDistrictProperties = (
  props: FeaturePropertiesI
): props is DistrictPropertiesI => {
  return !isPollingStationProperties(props) && !isCityProperties(props);
};

interface Geometry {
  type: string;
  coordinates: Coordinate[][];
}
export interface FeatureContoursI {
  type: string;
  properties: FeaturePropertiesI;
  geometry: Geometry;
}

export interface ContoursI {
  type: string;
  features: FeatureContoursI[];
}
