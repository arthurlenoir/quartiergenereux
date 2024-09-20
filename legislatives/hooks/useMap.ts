import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

import Map from "ol/Map.js";
import View from "ol/View.js";
import { defaults as defaultInteractions, Select } from "ol/interaction.js";
import { TileJSON } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { mouseActionButton } from "ol/events/condition";
import { FeaturePropertiesI } from "../types";

const key = "EwRPN85pjdsExkykwgEW";

export const useMap = (
  mapContainer: RefObject<HTMLDivElement>,
  onSelect: (data: FeaturePropertiesI) => void
) => {
  const mapRef = useRef<Map>();

  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useLayoutEffect(() => {
    if (!mapRef.current && mapContainer.current) {
      const view = new View();
      const mapTilerSource = new TileJSON({
        url: `https://api.maptiler.com/maps/streets-v2/tiles.json?key=${key}`, // source URL
        tileSize: 512,
        crossOrigin: "anonymous",
        attributions: " ",
      });
      const map = new Map({
        interactions: defaultInteractions(),
        layers: [
          new TileLayer({
            source: mapTilerSource,
          }),
        ],
        target: mapContainer.current,
        view,
      });
      mapRef.current = map;

      const select = new Select({
        condition: mouseActionButton,
      });
      select.on("select", function (event) {
        console.log("SELECT START", event);
        console.log(
          event.target.getFeatures().forEach((feature: any) => {
            console.log("feature", feature.values_);
            onSelectRef.current(feature.values_ as FeaturePropertiesI);
          })
        );
      });
      map.addInteraction(select);
      map.render();
    }
  }, [mapContainer]);
  return mapRef;
};
