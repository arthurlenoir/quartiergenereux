import { Nuance } from "./nuance";
import { PoliticalPole } from "./politicalPole";

enum CandidateElected {
  Elected = "élu",
  NotElected = "",
}

export interface CandidateResultI {
  numeroPanneau: string;
  nuance: Nuance;
  nom: string;
  prenom: string;
  sexe: string;
  voix: number;
  voixInscrits: string;
  voixExprimes: string;
  elu: CandidateElected;

  pole: PoliticalPole;
}

export interface PollingStationResult {
  departement: string;
  departementName: string;
  postalCode: string;
  cityName: string;
  bureauDeVote: string;
  inscrits: number;
  votants: number;
  votantsPourcent: string;
  abstentions: number;
  abstentionPourcent: string;
  exprimes: number;
  exprimesInscrits: string;
  exprimesVotants: string;
  blancs: number;
  blancsInscrits: string;
  blancsVotants: string;
  nuls: number;
  nulsInscrits: string;
  nulsVotants: string;
  candidats: CandidateResultI[];

  districtCode: number;
}
