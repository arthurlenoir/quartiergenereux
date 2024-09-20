import {
  FeaturePropertiesI,
  isCityProperties,
  isPollingStationProperties,
  PollingStationResult,
} from "../types";
import { withZeroPrefix } from "./withZeroPrefix";

const getPollingStationResultKey = (result: PollingStationResult) =>
  `${result.postalCode}_${withZeroPrefix(result.bureauDeVote)}`;

const getCityResultKey = (result: PollingStationResult) => result.postalCode;

const getDistrictResultKey = (result: PollingStationResult) =>
  `${result.districtCode}`;

export const getResultKeyGetter = (properties: FeaturePropertiesI) => {
  if (isPollingStationProperties(properties)) {
    return getPollingStationResultKey;
  }
  if (isCityProperties(properties)) {
    return getCityResultKey;
  }
  return getDistrictResultKey;
};
