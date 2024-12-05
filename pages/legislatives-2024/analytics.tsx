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
import { ProgressLegend } from "../../legislatives/components/ProgressLegend";
import {
  colorPerPole,
  getColorForProgression,
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
  const [politicalPole, setPoliticalPole] = useState<PoliticalPole>(
    PoliticalPole.Reactionnaire
  );
  const [minMax, setMinMax] = useState<{ min: number; max: number }>({
    min: Infinity,
    max: -Infinity,
  });

  const boundaries = useMapBoundaries(viewMode, DISTRICT);
  const [results, resultsPerVoting] = useVotingResults(voting, DISTRICT);

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
      const features = new GeoJSON().readFeatures(boundaries, {
        featureProjection: "EPSG:3857",
        dataProjection: "EPSG:4326",
      });
      const vectorSource = new VectorSource({
        features,
      });
      let max = -Infinity;
      let min = Infinity;

      if (voting === Voting.PROGRESSION_2022_2024_1) {
        const legislative2022 = resultsPerVoting[Voting.LEGISLATIVE_2022_1];
        const legislative2024 = resultsPerVoting[Voting.LEGISLATIVE_2024_1];
        if (legislative2022 && legislative2024) {
          const getResultKey = getResultKeyGetter(
            boundaries.features[0].properties as FeaturePropertiesI
          );
          const results2024PerFeatureKey = legislative2024.reduce(
            (acc: Record<string, PollingStationResult[]>, result) => {
              const key = getResultKey(result);
              if (!acc[key]) {
                acc[key] = [result];
              } else {
                acc[key].push(result);
              }
              return acc;
            },
            {}
          );
          const results2022PerFeatureKey = legislative2022.reduce(
            (acc: Record<string, PollingStationResult[]>, result) => {
              const key = getResultKey(result);
              if (!acc[key]) {
                acc[key] = [result];
              } else {
                acc[key].push(result);
              }
              return acc;
            },
            {}
          );
          const minMax = Object.entries(results2024PerFeatureKey).reduce(
            (acc: { min: number; max: number }, [key, result]) => {
              const result2022 = results2022PerFeatureKey[key];
              if (result2022) {
                const total2022 = sumResultsPerPole(result2022);
                const total2024 = sumResultsPerPole(result);
                const progress = total2022[politicalPole]
                  ? total2024[politicalPole] / total2022[politicalPole]
                  : null;
                if (!progress) return acc;
                if (progress > acc.max) {
                  acc.max = progress;
                }
                if (progress < acc.min) {
                  acc.min = progress;
                }
                return acc;
              }
              return acc;
            },
            { min: Infinity, max: -Infinity }
          );
          setMinMax(minMax);
          min = minMax.min;
          max = minMax.max;
        }
      }
      contoursLayer.current = new VectorLayer({
        source: vectorSource,
        style: (feature) => {
          const properties = feature.getProperties() as FeaturePropertiesI;
          const getFeatureKey = getFeatureKeyGetter(properties);
          const getResultKey = getResultKeyGetter(properties);
          const featureKey = getFeatureKey(properties);

          if (voting === Voting.PROGRESSION_2022_2024_1) {
            const legislative2022 = resultsPerVoting[Voting.LEGISLATIVE_2022_1];
            const legislative2024 = resultsPerVoting[Voting.LEGISLATIVE_2024_1];
            if (legislative2022 && legislative2024) {
              const filtered2022Results = legislative2022.filter((result) => {
                return featureKey === getResultKey(result);
              });
              const filtered2024Results = legislative2024.filter((result) => {
                return featureKey === getResultKey(result);
              });
              const synthesed2022Results =
                sumResultsPerPole(filtered2022Results);
              const synthesed2024Results =
                sumResultsPerPole(filtered2024Results);

              const progressionReactionnaire = synthesed2022Results[
                politicalPole
              ]
                ? synthesed2024Results[politicalPole] /
                  synthesed2022Results[politicalPole]
                : 1;

              const color = getColorForProgression(progressionReactionnaire, {
                min,
                max,
              });

              return new Style({
                fill: new Fill({
                  color: color.toHex8String(),
                }),
                stroke: new Stroke({
                  color: "rgba(0, 0, 0, 0.35)",
                  width: 1,
                }),
              });
            }
          }
          const filteredResults = results
            ? results.filter((result) => {
                return featureKey === getResultKey(result);
              })
            : [];

          const synthesedResults = sumResultsPerPole(filteredResults);
          const maxPole = getMaxPole(synthesedResults);

          return new Style({
            fill: new Fill({
              color: colorPerPole[maxPole.pole],
            }),
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
  }, [boundaries, mapRef, results, resultsPerVoting, voting, politicalPole]);

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
              voting === Voting.PROGRESSION_2022_2024_1 ? style.active : ""
            }`}
            onClick={() => {
              setVoting(Voting.PROGRESSION_2022_2024_1);
            }}
          >
            Progression 2022-2024 1<sup>er</sup> tour
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
        {voting === Voting.PROGRESSION_2022_2024_1 && (
          <div className={style.buttonContainer}>
            <button
              className={`${style.button} ${
                politicalPole === PoliticalPole.Progressif ? style.active : ""
              }`}
              onClick={() => {
                setPoliticalPole(PoliticalPole.Progressif);
              }}
            >
              Progressistes
            </button>
            <button
              className={`${style.button} ${
                politicalPole === PoliticalPole.NeoLiberal ? style.active : ""
              }`}
              onClick={() => {
                setPoliticalPole(PoliticalPole.NeoLiberal);
              }}
            >
              Néo-libéraux
            </button>
            <button
              className={`${style.button} ${
                politicalPole === PoliticalPole.Reactionnaire
                  ? style.active
                  : ""
              }`}
              onClick={() => {
                setPoliticalPole(PoliticalPole.Reactionnaire);
              }}
            >
              Réactionnaires
            </button>
          </div>
        )}
        {voting === Voting.PROGRESSION_2022_2024_1 &&
          minMax.max !== -Infinity &&
          minMax.min !== Infinity && (
            <div className={style.buttonContainer}>
              <ProgressLegend {...minMax} />
            </div>
          )}

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
