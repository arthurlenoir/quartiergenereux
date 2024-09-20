import { createWriteStream } from "fs";
import { readFile } from "fs/promises";

const removeQuotes = (s: string) => {
  if (s.startsWith('"') && s.endsWith('"')) {
    return s.substring(1, s.length - 1);
  }
  return s;
};

const splitResultsPerDep = async (dep: string) => {
  const depValue = parseInt(dep);
  const fileContent = await readFile(
    "./data/resultats-definitifs-par-bureau-de-vote-second-tour.csv",
    "utf8"
  );
  const writeStream = createWriteStream(
    `./public/data/resultats-2nd-tour-${dep}.json`
  );
  writeStream.write("[");

  let isFirst = true;
  const lines = fileContent.split(/\r?\n/g);
  lines.forEach((line: string) => {
    const columns = line.split(";");
    if (columns.length === 55) {
      const [
        departement,
        departementName,
        postalCode,
        cityName,
        bureauDeVote,
        inscrits,
        votants,
        votantsPourcent,
        abstentions,
        abstentionPourcent,
        exprimes,
        exprimesInscrits,
        exprimesVotants,
        blancs,
        blancsInscrits,
        blancsVotants,
        nuls,
        nulsInscrits,
        nulsVotants,
        ...candidats
      ] = columns;
      const result = {
        departement: removeQuotes(departement),
        departementName: removeQuotes(departementName),
        postalCode: removeQuotes(postalCode),
        cityName: removeQuotes(cityName),
        bureauDeVote: removeQuotes(bureauDeVote),
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
        for (let i = 0; i < 4; ++i) {
          const [
            numeroPanneau,
            nuance,
            nom,
            prenom,
            sexe,
            voix,
            voixInscrits,
            voixExprimes,
            elu,
          ] = candidats.slice(i * 9, i * 9 + 9);
          result.candidats.push({
            numeroPanneau,
            nuance,
            nom,
            prenom,
            sexe,
            voix,
            voixInscrits,
            voixExprimes,
            elu,
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
