import { PoliticalPole } from "../types/politicalPole";

export const colorPerPole: Record<PoliticalPole, string> = {
  [PoliticalPole.Progressif]: "#7C0C59AA",
  [PoliticalPole.NeoLiberal]: "#0C7C59AA",
  [PoliticalPole.Reactionnaire]: "#2B303AAA",
  [PoliticalPole.Autre]: "rgba(255, 255, 255, 0)",
};
