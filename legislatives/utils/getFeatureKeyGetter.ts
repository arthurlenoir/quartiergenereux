import {
  FeaturePropertiesI,
  isPollingStationProperties,
  isCityProperties,
  PollingStationPropertiesI,
  CityPropertiesI,
  DistrictPropertiesI,
} from "../types";

const getPollingStationKey = (properties: FeaturePropertiesI) =>
  (properties as PollingStationPropertiesI).codeBureauVote;

const getCityKey = (properties: FeaturePropertiesI) =>
  (properties as CityPropertiesI).code;

const getDistrictKey = (properties: FeaturePropertiesI) =>
  (properties as DistrictPropertiesI).codeCirconscription;

export const getFeatureKeyGetter = (
  properties: FeaturePropertiesI
): ((properties: FeaturePropertiesI) => string | number) => {
  if (isPollingStationProperties(properties)) {
    return getPollingStationKey;
  }
  if (isCityProperties(properties)) {
    return getCityKey;
  }
  return getDistrictKey;
};
