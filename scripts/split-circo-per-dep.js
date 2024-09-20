"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var stream_chain_1 = require("stream-chain");
var stream_json_1 = require("stream-json");
var Pick_1 = require("stream-json/filters/Pick");
var StreamArray_1 = require("stream-json/streamers/StreamArray");
var disassembler = require("stream-json/Disassembler").disassembler;
var stringer = require("stream-json/Stringer").stringer;
var splitCircoPerDepartment = function (dep) {
    (0, stream_chain_1.chain)([
        (0, fs_1.createReadStream)("./data/circonscriptions-legislatives-p20.geojson"),
        (0, stream_json_1.parser)(),
        (0, Pick_1.pick)({ filter: "features" }),
        (0, StreamArray_1.streamArray)(),
        function (_a) {
            var _b;
            var value = _a.value;
            if ((_b = value === null || value === void 0 ? void 0 : value.properties) === null || _b === void 0 ? void 0 : _b.codeDepartement) {
                if (value.properties.codeDepartement === dep) {
                    console.log("yes");
                    return value;
                }
                // const writer = getWriter(data.properties.codeDepartement);
                //writer.write(JSON.stringify(data));
            }
            else {
                console.log(JSON.stringify(Object.keys(value)));
            }
            return null;
        },
        disassembler(),
        // new Stringer({ useValues: true }),
        stringer({ makeArray: true }),
        (0, fs_1.createWriteStream)("./public/data/circo-".concat(dep, ".geojson")),
    ]);
    /*Object.values(writerPerDepartment).forEach((ws) => {
      ws.write(`]}`);
      ws.end();
    });*/
};
splitCircoPerDepartment("34");
