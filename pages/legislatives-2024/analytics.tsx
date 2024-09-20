import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FeaturePropertiesI,
  PoliticalPole,
  PollingStationResult,
  ViewMode,
  Voting,
} from "../../legislatives/types";

import style from "./analytics.module.css";
import {
  useMap,
  useMapBoundaries,
  useVotingResults,
} from "../../legislatives/hooks";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import { Geometry } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON.js";
import { Vector as VectorSource } from "ol/source.js";
import { Fill, Stroke, Style } from "ol/style";
import * as olExtent from "ol/extent";
import { DataSummary } from "../../legislatives/components/DataSummary";
import {
  colorPerPole,
  getFeatureKeyGetter,
  getMaxPole,
  getResultKeyGetter,
  sumDetailedResults,
  sumResultsPerPole,
} from "../../legislatives/utils";

const DISTRICT = "34";

export default function Legislatives() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.BUREAU_DE_VOTE);
  const [voting, setVoting] = useState<Voting>(Voting.LEGISLATIVE_2024_1);

  const boundaries = useMapBoundaries(viewMode, DISTRICT);
  const results = useVotingResults(voting, DISTRICT);

  const [selectedResult, setSelectedResult] = useState<{
    properties: FeaturePropertiesI;
    results: PollingStationResult;
  } | null>(null);

  const onSelect = useCallback(
    (selectedFeature: FeaturePropertiesI) => {
      const getFeatureKey = getFeatureKeyGetter(selectedFeature);
      const getResultKey = getResultKeyGetter(selectedFeature);
      const featureKey = getFeatureKey(selectedFeature);
      if (!results) return;

      const filteredResult = results.filter(
        (result) => getResultKey(result) === featureKey
      );
      const sumupResults = sumDetailedResults(filteredResult);
      setSelectedResult({ properties: selectedFeature, results: sumupResults });
    },
    [results]
  );

  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useMap(mapContainer, onSelect);

  const contoursLayer = useRef<VectorLayer<Feature<Geometry>>>();
  useEffect(() => {
    if (mapRef.current && boundaries) {
      let fitView = true;
      if (contoursLayer.current) {
        fitView = false;
        mapRef.current.removeLayer(contoursLayer.current);
      }
      const features = new GeoJSON({
        featureProjection: "EPSG:4326",
        dataProjection: "EPSG:4326",
      }).readFeatures(boundaries, { featureProjection: "EPSG:3857" });
      const vectorSource = new VectorSource({
        features,
      });
      contoursLayer.current = new VectorLayer({
        source: vectorSource,
        style: (feature) => {
          const properties = feature.getProperties() as FeaturePropertiesI;
          const getFeatureKey = getFeatureKeyGetter(properties);
          const getResultKey = getResultKeyGetter(properties);

          const filteredResults = results
            ? results.filter((result) => {
                return getFeatureKey(properties) === getResultKey(result);
              })
            : [];

          const synthesedResults = sumResultsPerPole(filteredResults);
          const maxPole = getMaxPole(synthesedResults);

          return new Style({
            fill: new Fill({
              color: colorPerPole[maxPole.pole],
            }),
            /*fill: new Fill({
              color: "rgba(255, 255, 255, 0)",
            }),*/
            stroke: new Stroke({
              color: "rgba(0, 0, 0, 0.35)",
              width: 1,
            }),
          });
        },
      });
      mapRef.current.addLayer(contoursLayer.current);
      mapRef.current.render();
      if (fitView) {
        const mapView = mapRef.current.getView();
        const firstFeature = features.length > 0 ? features[0] : null;
        if (firstFeature) {
          const featureExtend = firstFeature
            .getGeometry()
            ?.getExtent()
            .slice(0);
          if (featureExtend) {
            features.forEach(function (feature) {
              const localExtend = feature?.getGeometry()?.getExtent();
              localExtend && olExtent.extend(featureExtend, localExtend);
            });
            mapView.fit(featureExtend, { padding: [20, 20, 20, 20] });
          }
        }
      }
    }
  }, [boundaries, mapRef, results]);

  return (
    <>
      <Head>
        <title>
          Cartographie des résultats de l&apos;élection législative 2024
        </title>
        <meta
          name="description"
          content="Cartographie des résultats de l'élection législative 2024"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.mainContainer}>
        <div className={style.buttonContainer}>
          <button
            className={`${style.button} ${
              viewMode === ViewMode.BUREAU_DE_VOTE ? style.active : ""
            }`}
            onClick={() => {
              setViewMode(ViewMode.BUREAU_DE_VOTE);
            }}
          >
            Par bureau de vote
          </button>
          <button
            className={`${style.button} ${
              viewMode === ViewMode.COMMUNE ? style.active : ""
            }`}
            onClick={() => {
              setViewMode(ViewMode.COMMUNE);
            }}
          >
            Par commune
          </button>
          <button
            className={`${style.button} ${
              viewMode === ViewMode.CIRCO ? style.active : ""
            }`}
            onClick={() => {
              setViewMode(ViewMode.CIRCO);
            }}
          >
            Par circo
          </button>
        </div>
        <div className={style.buttonContainer}>
          <button
            className={`${style.button} ${
              voting === Voting.LEGISLATIVE_2022_1 ? style.active : ""
            }`}
            onClick={() => {
              setVoting(Voting.LEGISLATIVE_2022_1);
            }}
          >
            1<sup>er</sup> tour législatives 2022
          </button>
          <button
            className={`${style.button} ${
              voting === Voting.LEGISLATIVE_2022_2 ? style.active : ""
            }`}
            onClick={() => {
              setVoting(Voting.LEGISLATIVE_2022_2);
            }}
          >
            2<sup>nd</sup> tour législatives 2022
          </button>
          <button
            className={`${style.button} ${
              voting === Voting.LEGISLATIVE_2024_1 ? style.active : ""
            }`}
            onClick={() => {
              setVoting(Voting.LEGISLATIVE_2024_1);
            }}
          >
            1<sup>er</sup> tour législatives 2024
          </button>
          <button
            className={`${style.button} ${
              voting === Voting.LEGISLATIVE_2024_2 ? style.active : ""
            }`}
            onClick={() => {
              setVoting(Voting.LEGISLATIVE_2024_2);
            }}
          >
            2<sup>nd</sup> tour législatives 2024
          </button>
        </div>
        <div className={style.content}>
          <div ref={mapContainer} className={style.mapContainer} />
          {selectedResult && selectedResult.results && (
            <div className={style.dataSummary}>
              <DataSummary
                data={selectedResult.properties}
                results={selectedResult.results}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
