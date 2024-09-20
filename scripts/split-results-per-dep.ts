import { createReadStream, createWriteStream } from "fs";
import { readFile } from "fs/promises";
import { transform } from "stream-transform";

const splitResultsPerDep = async (dep: string) => {
  const depValue = parseInt(dep);
  const fileContent = await readFile(
    "./data/resultats-definitifs-par-bureau-de-vote.csv",
    "utf8"
  );
  /*const readStream = createReadStream(
    "./data/resultats-definitifs-par-bureau-de-vote2.csv",
    "ascii"
  );*/
  const writeStream = createWriteStream(`./data/resultats-${dep}.json`);
  writeStream.write("[");

  let isFirst = true;
  let lastLine = "";

  fileContent;
  const lines = fileContent.split(/\r?\n/g);
  lines.forEach((line: string, index: number) => {
    const columns = line.split(";");
    if (columns.length === 190) {
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
        candidats: [] as any[],
      };
      if (parseInt(result.departement) === depValue) {
        for (let i = 0; i < 19; ++i) {
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
        console.log("YES", result.candidats[0]);
        writeStream.write(`${isFirst ? "" : ", "}${JSON.stringify(result)}`);
        if (isFirst) {
          isFirst = false;
        }
      } else {
        console.log(result.departement);
      }
    } else {
      console.log("LENGTH", columns.length);
    }
  });
  writeStream.write("]");
  writeStream.end();

  /*const transformer = transform((record, callback) => {
    const lines = record.split(/\r?\n/g);
    const linesCount = lines.length;
    lines.forEach((line: string, index: number) => {
      if (index === 0) {
        line = lastLine + line;
      }
      if (index === linesCount - 1) {
        lastLine = line;
      } else {
        const columns = line.split(";");
        if (columns.length === 190) {
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
            candidats: [] as any[],
          };
          if (parseInt(result.departement) === depValue) {
            for (let i = 0; i < 19; ++i) {
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
            console.log("YES", result.candidats[0]);
            writeStream.write(
              `${isFirst ? "" : ", "}${JSON.stringify(result)}`
            );
            if (isFirst) {
              isFirst = false;
            }
          } else {
            console.log(result.departement);
          }
        } else {
          console.log("LENGTH", columns.length);
        }
      }
    });
  });

  readStream.pipe(transformer).once("end", () => {
    writeStream.write("]");
    writeStream.end();
  });*/
};

splitResultsPerDep("34");
