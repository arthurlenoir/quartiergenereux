import { useEffect, useState } from "react";
import { ContoursI, ViewMode } from "../types";

const getUrlToBoundaries = (viewMode: ViewMode, district: string) => {
  if (viewMode === ViewMode.BUREAU_DE_VOTE) {
    return `/data/contours-${district}.geojson`;
  }
  if (viewMode === ViewMode.COMMUNE) {
    return `/data/communes-${district}.geojson`;
  }
  return `/data/circo-${district}.geojson`;
};

const fetchBoundaries = async (viewMode: ViewMode, district: string) => {
  const url = getUrlToBoundaries(viewMode, district);
  const response = await fetch(url);

  const boundaries = (await response.json()) as ContoursI;
  return boundaries;
};

export const useMapBoundaries = (viewMode: ViewMode, district: string) => {
  const [boundaries, setBoundaries] = useState<
    Record<ViewMode, ContoursI | null>
  >({
    [ViewMode.BUREAU_DE_VOTE]: null,
    [ViewMode.COMMUNE]: null,
    [ViewMode.CIRCO]: null,
  });

  useEffect(() => {
    setBoundaries({
      [ViewMode.BUREAU_DE_VOTE]: null,
      [ViewMode.COMMUNE]: null,
      [ViewMode.CIRCO]: null,
    });
  }, [district]);

  useEffect(() => {
    if (boundaries[viewMode] === null) {
      fetchBoundaries(viewMode, district).then((boundaries) => {
        setBoundaries((currentBoundaries) => ({
          ...currentBoundaries,
          [viewMode]: boundaries,
        }));
      });
    }
  }, [viewMode, boundaries, district]);

  return boundaries[viewMode];
};
