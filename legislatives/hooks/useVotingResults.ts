import { useEffect, useState } from "react";
import {
  CandidateResultI,
  polePerNuance,
  PoliticalPole,
  PollingStationResult,
  Voting,
} from "../types";
import { withZeroPrefix } from "../utils";

const getResultsUrl = (voting: Voting, district: string) => {
  if (voting === Voting.LEGISLATIVE_2022_1) {
    return `/data/resultats-2022-1er-tour-${district}.json`;
  }
  if (voting === Voting.LEGISLATIVE_2022_2) {
    return `/data/resultats-2022-2nd-tour-${district}.json`;
  }
  if (voting === Voting.LEGISLATIVE_2024_1) {
    return `/data/resultats-${district}.json`;
  }
  if (voting === Voting.LEGISLATIVE_2024_2) {
    return `/data/resultats-2nd-tour-${district}.json`;
  }
  return null;
};

const fetchResults = async (voting: Voting, district: string) => {
  const url = getResultsUrl(voting, district);
  if (!url) {
    return [];
  }
  const response = await fetch(url);
  const results = (await response.json()) as PollingStationResult[];
  return results;
};

const fetchDistrictPerPollingStation = async (district: string) => {
  const url = `/data/bdv-${district}.json`;
  const response = await fetch(url);
  const districtPerPollingStation = (await response.json()) as Record<
    string,
    number
  >;
  return districtPerPollingStation;
};

type PollingStationResultPerVoting = Record<
  Voting,
  PollingStationResult[] | null
>;

const getPoleForCandidate = (
  candidate: CandidateResultI,
  voting: Voting
): PoliticalPole => {
  if (
    candidate.nom.toLowerCase() === "ménard" &&
    candidate.prenom.toLowerCase() === "emmanuelle"
  ) {
    return PoliticalPole.Reactionnaire;
  }
  return polePerNuance[candidate.nuance];
};

const onResultsFetched = (
  results: PollingStationResult[],
  voting: Voting,
  districtPerPollingStation: Record<string, number>,
  setResultsPerVoting: (
    value: React.SetStateAction<PollingStationResultPerVoting>
  ) => void
) => {
  setResultsPerVoting((currentResults) => ({
    ...currentResults,
    [voting]: results.map((result) => {
      const intermediateKey = `${result.postalCode}_${withZeroPrefix(
        result.bureauDeVote
      )}`;
      let districtCode = districtPerPollingStation[intermediateKey];
      let bureauDeVote = parseInt(result.bureauDeVote);
      while (!districtCode && bureauDeVote > 0) {
        --bureauDeVote;
        const intermediateKey = `${result.postalCode}_${withZeroPrefix(
          `${bureauDeVote}`
        )}`;
        districtCode = districtPerPollingStation[intermediateKey];
      }
      return {
        ...result,
        abstentions: parseInt(`${result.abstentions}`),
        blancs: parseInt(`${result.blancs}`),
        exprimes: parseInt(`${result.exprimes}`),
        inscrits: parseInt(`${result.inscrits}`),
        nuls: parseInt(`${result.nuls}`),
        votants: parseInt(`${result.votants}`),
        districtCode,
        candidats: result.candidats.map((candidat) => ({
          ...candidat,
          voix: parseInt(`${candidat.voix}`),
          pole: getPoleForCandidate(candidat, voting),
        })),
      };
    }),
  }));
};

export const useVotingResults = (
  voting: Voting,
  district: string
): [
  PollingStationResult[] | null,
  Record<Voting, PollingStationResult[] | null>
] => {
  const [resultsPerVoting, setResultsPerVoting] = useState<
    Record<Voting, PollingStationResult[] | null>
  >({
    [Voting.LEGISLATIVE_2022_1]: null,
    [Voting.LEGISLATIVE_2022_2]: null,
    [Voting.LEGISLATIVE_2024_1]: null,
    [Voting.LEGISLATIVE_2024_2]: null,
    [Voting.PROGRESSION_2022_2024_1]: null,
  });
  const [districtPerPollingStation, setDistrictPerPollingStation] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    setResultsPerVoting({
      [Voting.LEGISLATIVE_2022_1]: null,
      [Voting.LEGISLATIVE_2022_2]: null,
      [Voting.LEGISLATIVE_2024_1]: null,
      [Voting.LEGISLATIVE_2024_2]: null,
      [Voting.PROGRESSION_2022_2024_1]: null,
    });
    fetchDistrictPerPollingStation(district).then(setDistrictPerPollingStation);
  }, [district]);

  useEffect(() => {
    if (voting === Voting.PROGRESSION_2022_2024_1) {
      if (!resultsPerVoting[Voting.LEGISLATIVE_2022_1]) {
        fetchResults(Voting.LEGISLATIVE_2022_1, district).then((results) => {
          onResultsFetched(
            results,
            Voting.LEGISLATIVE_2022_1,
            districtPerPollingStation,
            setResultsPerVoting
          );
        });
      }
      if (!resultsPerVoting[Voting.LEGISLATIVE_2024_1]) {
        fetchResults(Voting.LEGISLATIVE_2024_1, district).then((results) => {
          onResultsFetched(
            results,
            Voting.LEGISLATIVE_2024_1,
            districtPerPollingStation,
            setResultsPerVoting
          );
        });
      }
    }
    if (!resultsPerVoting[voting]) {
      fetchResults(voting, district).then((results) => {
        onResultsFetched(
          results,
          voting,
          districtPerPollingStation,
          setResultsPerVoting
        );
      });
    }
  }, [voting, district, districtPerPollingStation, resultsPerVoting]);

  return [resultsPerVoting[voting], resultsPerVoting];
};
