import { Nuance } from "./nuance";
import { PoliticalPole } from "./politicalPole";

export const polePerNuance: Record<Nuance, PoliticalPole> = {
  [Nuance.EXG]: PoliticalPole.Progressif,
  [Nuance.COM]: PoliticalPole.Progressif,
  [Nuance.FI]: PoliticalPole.Progressif,
  [Nuance.RDG]: PoliticalPole.Progressif,
  [Nuance.UG]: PoliticalPole.Progressif,
  [Nuance.VEC]: PoliticalPole.Progressif,
  [Nuance.NUP]: PoliticalPole.Progressif,
  [Nuance.DXG]: PoliticalPole.Progressif,

  [Nuance.DVG]: PoliticalPole.Progressif,
  [Nuance.SOC]: PoliticalPole.Progressif,

  [Nuance.ENS]: PoliticalPole.NeoLiberal,
  [Nuance.DVC]: PoliticalPole.NeoLiberal,
  [Nuance.LR]: PoliticalPole.NeoLiberal,
  [Nuance.UDI]: PoliticalPole.NeoLiberal,
  [Nuance.HOR]: PoliticalPole.NeoLiberal,
  [Nuance.MDM]: PoliticalPole.NeoLiberal,
  [Nuance.DVD]: PoliticalPole.NeoLiberal,

  [Nuance.REC]: PoliticalPole.Reactionnaire,
  [Nuance.UXD]: PoliticalPole.Reactionnaire,
  [Nuance.EXD]: PoliticalPole.Reactionnaire,
  [Nuance.RN]: PoliticalPole.Reactionnaire,

  [Nuance.REG]: PoliticalPole.Autre,
  [Nuance.ECO]: PoliticalPole.Autre,
  [Nuance.DSV]: PoliticalPole.Autre,
  [Nuance.DIV]: PoliticalPole.Autre,
  [Nuance.OTHER]: PoliticalPole.Autre,
};
