import React from "react";
import {
  CandidateResultI,
  FeaturePropertiesI,
  isCityProperties,
  isPollingStationProperties,
  PoliticalPole,
  PollingStationResult,
} from "../types";
import { PieChart } from "react-minimal-pie-chart";
import tinycolor from "tinycolor2";
import { colorPerPole } from "../utils";
import { CandidateResult } from "./CandidateResult";

type Props = {
  data: FeaturePropertiesI;
  results: PollingStationResult;
};

const getName = (data: FeaturePropertiesI) => {
  if (isPollingStationProperties(data)) {
    return `${data.nomCommune} - BDV ${data.numeroBureauVote}`;
  }
  if (isCityProperties(data)) {
    return data.nom;
  }
  return `${data.nomDepartement} : ${data.nomCirconscription}`;
};

const sortCandidatesPerVotes = (c1: CandidateResultI, c2: CandidateResultI) => {
  if (c1.voix > c2.voix) return -1;
  else if (c1.voix < c2.voix) return 1;
  return 0;
};

const filterCandidates = (candidate: CandidateResultI) =>
  candidate.numeroPanneau !== "";

export const DataSummary: React.FC<Props> = ({ data, results }) => {
  const sortedCandidates = results.candidats
    .filter(filterCandidates)
    .sort(sortCandidatesPerVotes);
  console.log("sortedCandidates", sortedCandidates);
  const sortedPoles = sortedCandidates.reduce(
    (acc: PoliticalPole[], candidate) => {
      if (acc.includes(candidate.pole)) return acc;
      return [...acc, candidate.pole];
    },
    []
  );
  const firstFromPole: Partial<Record<PoliticalPole, boolean>> = {};
  const chartData = sortedCandidates
    .sort((c1, c2) => {
      if (c1.pole === c2.pole) return 0;
      const i1 = sortedPoles.indexOf(c1.pole);
      const i2 = sortedPoles.indexOf(c2.pole);
      return i1 - i2;
    })
    .map((candidate) => {
      const color = firstFromPole[candidate.pole]
        ? tinycolor(colorPerPole[candidate.pole]).brighten(25).toString()
        : colorPerPole[candidate.pole];
      firstFromPole[candidate.pole] = true;
      return {
        title: `${candidate.prenom} ${candidate.nom}`,
        value: candidate.voix,
        color,
      };
    });
  return (
    <div style={{ paddingRight: "16px", paddingLeft: "8px" }}>
      <h4>{getName(data)}</h4>
      <PieChart
        data={chartData}
        lineWidth={50}
        startAngle={180}
        lengthAngle={180}
        style={{ marginBottom: -120 }}
      />
      {sortedCandidates.map((candidate) => {
        return (
          <CandidateResult
            key={`${candidate.prenom}-${candidate.nom}`}
            candidate={candidate}
            totalExpressed={results.exprimes}
          />
        );
      })}
    </div>
  );
};
