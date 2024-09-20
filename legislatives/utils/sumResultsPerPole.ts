import { CandidateResultI, PoliticalPole, PollingStationResult } from "../types";

const groupResultPerPole = (
  acc: Record<PoliticalPole | "TOTAL", number>,
  result: CandidateResultI
) => {
  const voix = parseInt(`${result.voix}`);
  if (isNaN(voix)) {
    return acc;
  }
  if (result.pole) {
    acc[result.pole] = acc[result.pole] + voix;
  }
  acc.TOTAL = acc.TOTAL + voix;
  return acc;
};

export const sumResultsPerPole = (results: PollingStationResult[]) =>
  results.reduce(
    (acc, result) => {
      return result.candidats.reduce(groupResultPerPole, acc);
    },
    {
      TOTAL: 0,
      [PoliticalPole.Progressif]: 0,
      [PoliticalPole.NeoLiberal]: 0,
      [PoliticalPole.Reactionnaire]: 0,
      [PoliticalPole.Autre]: 0,
    }
  );
