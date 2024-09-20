import { PoliticalPole } from "../types";

export const getMaxPole = (resultPerPole: Record<PoliticalPole, number>) => {
  return Object.entries(resultPerPole ?? {}).reduce(
    (acc: { pole: PoliticalPole; votes: number }, [pole, votes]) => {
      if (pole === "TOTAL") return acc;
      if (votes > acc.votes) {
        return {
          pole: pole as PoliticalPole,
          votes,
        };
      }
      return acc;
    },
    { pole: PoliticalPole.Autre, votes: 0 }
  );
};
