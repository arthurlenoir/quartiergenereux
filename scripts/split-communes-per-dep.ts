import { createReadStream, createWriteStream, WriteStream } from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { pick } from "stream-json/filters/Pick";
import { streamArray } from "stream-json/streamers/StreamArray";
import { FeatureContoursI } from "../legislatives/types";
const { disassembler } = require("stream-json/Disassembler");
const { stringer } = require("stream-json/Stringer");

const writerPerDepartment: Record<string, WriteStream> = {};

const splitCommunesPerDepartment = (dep: string) => {
  chain([
    createReadStream("./data/communes-avec-outre-mer.geojson"),
    parser(),
    pick({ filter: "features" }),
    streamArray(),
    ({ value }: { value?: FeatureContoursI }) => {
      if (value?.properties?.code) {
        if (value.properties.code.startsWith(dep)) {
          console.log("yes");
          return value;
        }
        // const writer = getWriter(data.properties.codeDepartement);
        //writer.write(JSON.stringify(data));
      } else if (value) {
        console.log(JSON.stringify(Object.keys(value)));
      }
      return null;
    },
    disassembler(),
    // new Stringer({ useValues: true }),
    stringer({ makeArray: true }),
    createWriteStream(`./public/data/communes-${dep}.geojson`),
  ]);
  /*Object.values(writerPerDepartment).forEach((ws) => {
    ws.write(`]}`);
    ws.end();
  });*/
};

splitCommunesPerDepartment("34");
