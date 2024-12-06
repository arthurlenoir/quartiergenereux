import { ReactNode } from "react";

export interface Referent {
  name: string;
  photo: ReactNode;
}

export interface WorkingGroup {
  name: string;
  color: string;
  referents: Referent[];
}
