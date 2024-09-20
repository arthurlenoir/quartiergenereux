import { createWriteStream } from "fs";
import { readFile } from "fs/promises";

const circoParBDV = async (dep: string) => {
  const depValue = parseInt(dep);
  const fileContent = await readFile(
    "./data/bureaux-de-vote-circonscriptions.csv",
    "utf8"
  );
  const writeStream = createWriteStream(`./public/data/bdv-${dep}.json`);
  writeStream.write("{");

  let isFirst = true;

  fileContent;
  const lines = fileContent.split(/\r?\n/g);
  lines.forEach((line: string) => {
    const columns = line.split(",");
    if (columns.length === 8) {
      const [
        codeDepartement,
        nomDepartement,
        codeCirconscription,
        nomCirconscription,
        codeCommune,
        nomCommune,
        numeroBureauVote,
        codeBureauVote,
      ] = columns;

      if (parseInt(codeDepartement) === depValue) {
        writeStream.write(
          `${isFirst ? "" : ", "}"${codeBureauVote}": ${codeCirconscription}`
        );
        if (isFirst) {
          isFirst = false;
        }
      }
    } else {
      console.log("LENGTH", columns.length);
    }
  });
  writeStream.write("}");
  writeStream.end();
};

circoParBDV("34");
