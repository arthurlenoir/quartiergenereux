import { PollingStationResult } from "../types";

export const sumDetailedResults = (results: PollingStationResult[]) => {
  const [firstResult, ...otherResults] = results;
  return otherResults.reduce((acc: PollingStationResult, result) => {
    return {
      ...acc,
      inscrits: acc.inscrits + result.inscrits,
      votants: acc.votants + result.votants,
      abstentions: acc.abstentions + result.abstentions,
      exprimes: acc.exprimes + result.exprimes,
      blancs: acc.blancs + result.blancs,
      nuls: acc.nuls + result.nuls,
      candidats: result.candidats.reduce((acc, candidate) => {
        const accCandidateIndex = acc.findIndex(
          (c) => c.prenom === candidate.prenom && c.nom === candidate.nom
        );
        if (accCandidateIndex === -1) {
          return acc;
        }

        const accCandidate = acc[accCandidateIndex];
        return [
          ...acc.slice(0, accCandidateIndex),
          { ...accCandidate, voix: accCandidate.voix + candidate.voix },
          ...acc.slice(accCandidateIndex + 1),
        ];
      }, acc.candidats),
    };
  }, firstResult);
};
