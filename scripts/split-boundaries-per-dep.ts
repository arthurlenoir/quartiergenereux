import { createReadStream, createWriteStream, WriteStream } from "fs";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { pick } from "stream-json/filters/Pick";
import { streamValues } from "stream-json/streamers/StreamValues";
import { streamArray } from "stream-json/streamers/StreamArray";
const { disassembler } = require("stream-json/Disassembler");
const Stringer = require("stream-json/jsonl/Stringer");
const { stringer } = require("stream-json/Stringer");

const writerPerDepartment: Record<string, WriteStream> = {};

const getWriter = (department: string) => {
  const writer = writerPerDepartment[department];
  if (writer) return writer;
  const ws = createWriteStream(`./data/concours-${department}.geojson`);
  ws.write(
    `{"type": "FeatureCollection", "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}}, "features": [`
  );
  writerPerDepartment[department] = ws;
  return ws;
};

const splitBoundariesPerDepartment = (dep: string) => {
  chain([
    createReadStream("./data/contours-france.json"),
    parser(),
    pick({ filter: "features" }),
    streamArray(),
    ({ value }) => {
      if (value?.properties?.codeDepartement) {
        if (value.properties.codeDepartement === dep) {
          console.log("yes");
          return value;
        }
        // const writer = getWriter(data.properties.codeDepartement);
        //writer.write(JSON.stringify(data));
      } else {
        console.log(JSON.stringify(Object.keys(value)));
      }
      return null;
    },
    disassembler(),
    // new Stringer({ useValues: true }),
    stringer({ makeArray: true }),
    createWriteStream(`./data/contours-${dep}.geojson`),
  ]);
  /*Object.values(writerPerDepartment).forEach((ws) => {
    ws.write(`]}`);
    ws.end();
  });*/
};

splitBoundariesPerDepartment("34");
