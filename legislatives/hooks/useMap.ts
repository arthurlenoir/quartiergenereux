import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

import Map from "ol/Map.js";
// import { Vector as VectorSource } from "ol/source.js";
import View from "ol/View.js";
// import GeoJSON from "ol/format/GeoJSON.js";
import { defaults as defaultInteractions, Select } from "ol/interaction.js";
import { TileJSON } from "ol/source";
import { defaults as defaultControl } from "ol/control";
import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Fill, Stroke, Style } from "ol/style";
import { mouseActionButton } from "ol/events/condition";
import { FeaturePropertiesI } from "../types";

const key = "EwRPN85pjdsExkykwgEW";

export const useMap = (
  mapContainer: RefObject<HTMLDivElement>,
  onSelect: (data: FeaturePropertiesI) => void
) => {
  //const [inseeData, setInseeData] = useState<any>(null);
  const mapRef = useRef<Map>();

  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  /*useEffect(() => {
    fetch("/data/IRIS_data_INSEE_34_4326.geojson").then(async (response) => {
      const data = await response.json();
      setInseeData(data);
    });
  }, []);*/

  useLayoutEffect(() => {
    if (!mapRef.current && mapContainer.current) {
      const view = new View({ projection: "EPSG:3857" });
      const mapTilerSource = new TileJSON({
        url: `https://api.maptiler.com/maps/streets-v2/tiles.json?key=${key}`, // source URL
        tileSize: 512,
        crossOrigin: "anonymous",
      });
      const map = new Map({
        interactions: defaultInteractions(),
        controls: defaultControl({ attribution: false }),
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
        event.target.getFeatures().forEach((feature: any) => {
          onSelectRef.current(feature.values_ as FeaturePropertiesI);
        });
      });
      map.addInteraction(select);
      map.render();
    }
  }, [mapContainer]);
  //2154
  /*useEffect(() => {
    if (inseeData && mapRef.current) {
      const features = new GeoJSON().readFeatures(inseeData, {
        featureProjection: "EPSG:3857",
        dataProjection: "EPSG:4326",
      });
      console.log("features", features);
      const vectorSource = new VectorSource({
        features,
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: (feature) => {
          const properties = feature.getProperties();
          console.log("properties", properties);
          const color = properties["Taux de pauvreté au seuil de 60 % (%)"]
          return new Style({
            fill: new Fill({
              color: "rgba(255, 255, 255, 0.1)",
            }),
            stroke: new Stroke({
              color: "rgba(0, 0, 0, 0.05)",
              width: 1,
            }),
          });
        },
      });

      mapRef.current.getLayers().insertAt(1, vectorLayer);
      //mapRef.current.addLayer(vectorLayer);
      console.log("addLayer", vectorLayer);
      mapRef.current.render();
    }
  }, [inseeData]);*/
  return mapRef;
};
