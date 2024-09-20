import { useEffect, useState } from "react";
import { polePerNuance, PollingStationResult, Voting } from "../types";
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
  return `/data/resultats-2nd-tour-${district}.json`;
};

const fetchResults = async (voting: Voting, district: string) => {
  const url = getResultsUrl(voting, district);
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

export const useVotingResults = (voting: Voting, district: string) => {
  const [resultsPerVoting, setResultsPerVoting] = useState<
    Record<Voting, PollingStationResult[] | null>
  >({
    [Voting.LEGISLATIVE_2022_1]: null,
    [Voting.LEGISLATIVE_2022_2]: null,
    [Voting.LEGISLATIVE_2024_1]: null,
    [Voting.LEGISLATIVE_2024_2]: null,
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
    });
    fetchDistrictPerPollingStation(district).then(setDistrictPerPollingStation);
  }, [district]);

  useEffect(() => {
    if (!resultsPerVoting[voting] && districtPerPollingStation) {
      fetchResults(voting, district).then(async (results) => {
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
                pole: polePerNuance[candidat.nuance],
              })),
            };
          }),
        }));
      });
    }
  }, [voting, district, districtPerPollingStation, resultsPerVoting]);

  return resultsPerVoting[voting];
};
