import { createWriteStream } from "fs";
import { readFile } from "fs/promises";

const removeQuotes = (s: string) => {
  if (!s) return "";
  if (s.length < 2) return s;
  if (s.startsWith('"') && s.endsWith('"')) {
    return s.substring(1, s.length - 1);
  }
  return s;
};

const splitResultsPerDep = async (dep: string) => {
  const depValue = parseInt(dep);
  const fileContent = await readFile(
    "./data/resultats-par-niveau-burvot-t2-france-entiere.txt",
    "latin1"
  );
  const writeStream = createWriteStream(
    `./public/data/resultats-2022-2nd-tour-${dep}.json`
  );
  writeStream.write("[");

  let isFirst = true;
  const lines = fileContent.split(/\r?\n/g);
  lines.forEach((line: string) => {
    const columns = line.split(";");
    if (columns.length >= 21) {
      const [
        departement,
        departementName,
        circo,
        circoName,
        postalCode,
        cityName,
        bureauDeVote,
        inscrits,
        abstentions,
        abstentionPourcent,
        votants,
        votantsPourcent,
        blancs,
        blancsInscrits,
        blancsVotants,
        nuls,
        nulsInscrits,
        nulsVotants,
        exprimes,
        exprimesInscrits,
        exprimesVotants,
        ...candidats
      ] = columns;

      const result = {
        departement: removeQuotes(departement),
        departementName: removeQuotes(departementName),
        postalCode: `${removeQuotes(departement)}${removeQuotes(postalCode)}`,
        cityName: removeQuotes(cityName),
        bureauDeVote: removeQuotes(bureauDeVote),
        districtCode: parseInt(removeQuotes(circo)),
        inscrits: removeQuotes(inscrits),
        votants: removeQuotes(votants),
        votantsPourcent: removeQuotes(votantsPourcent),
        abstentions: removeQuotes(abstentions),
        abstentionPourcent: removeQuotes(abstentionPourcent),
        exprimes: removeQuotes(exprimes),
        exprimesInscrits: removeQuotes(exprimesInscrits),
        exprimesVotants: removeQuotes(exprimesVotants),
        blancs: removeQuotes(blancs),
        blancsInscrits: removeQuotes(blancsInscrits),
        blancsVotants: removeQuotes(blancsVotants),
        nuls: removeQuotes(nuls),
        nulsInscrits: removeQuotes(nulsInscrits),
        nulsVotants: removeQuotes(nulsVotants),
        candidats: [] as any[],
      };
      if (parseInt(result.departement) === depValue) {
        const candidatesCount = candidats.length / 8;
        console.log(candidats.length, candidatesCount);
        for (let i = 0; i < candidatesCount; ++i) {
          const [
            numeroPanneau,
            sexe,
            nom,
            prenom,
            nuance,
            voix,
            voixInscrits,
            voixExprimes,
          ] = candidats.slice(i * 8, i * 8 + 8);
          result.candidats.push({
            numeroPanneau: removeQuotes(numeroPanneau),
            nuance: removeQuotes(nuance),
            nom: removeQuotes(nom),
            prenom: removeQuotes(prenom),
            sexe: removeQuotes(sexe),
            voix: removeQuotes(voix),
            voixInscrits: removeQuotes(voixInscrits),
            voixExprimes: removeQuotes(voixExprimes),
          });
        }
        writeStream.write(`${isFirst ? "" : ", "}${JSON.stringify(result)}`);
        if (isFirst) {
          isFirst = false;
        }
      }
    }
  });
  writeStream.write("]");
  writeStream.end();
};

splitResultsPerDep("34");
