"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs_1 = require("fs");
var promises_1 = require("fs/promises");
var splitResultsPerDep = function (dep) { return __awaiter(void 0, void 0, void 0, function () {
    var depValue, fileContent, writeStream, isFirst, lastLine, lines;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                depValue = parseInt(dep);
                return [4 /*yield*/, (0, promises_1.readFile)("./data/resultats-definitifs-par-bureau-de-vote.csv", "utf8")];
            case 1:
                fileContent = _a.sent();
                writeStream = (0, fs_1.createWriteStream)("./data/resultats-".concat(dep, ".json"));
                writeStream.write("[");
                isFirst = true;
                lastLine = "";
                fileContent;
                lines = fileContent.split(/\r?\n/g);
                lines.forEach(function (line, index) {
                    var columns = line.split(";");
                    if (columns.length === 190) {
                        var departement = columns[0], departementName = columns[1], postalCode = columns[2], cityName = columns[3], bureauDeVote = columns[4], inscrits = columns[5], votants = columns[6], votantsPourcent = columns[7], abstentions = columns[8], abstentionPourcent = columns[9], exprimes = columns[10], exprimesInscrits = columns[11], exprimesVotants = columns[12], blancs = columns[13], blancsInscrits = columns[14], blancsVotants = columns[15], nuls = columns[16], nulsInscrits = columns[17], nulsVotants = columns[18], candidats = columns.slice(19);
                        var result = {
                            departement: departement,
                            departementName: departementName,
                            postalCode: postalCode,
                            cityName: cityName,
                            bureauDeVote: bureauDeVote,
                            inscrits: inscrits,
                            votants: votants,
                            votantsPourcent: votantsPourcent,
                            abstentions: abstentions,
                            abstentionPourcent: abstentionPourcent,
                            exprimes: exprimes,
                            exprimesInscrits: exprimesInscrits,
                            exprimesVotants: exprimesVotants,
                            blancs: blancs,
                            blancsInscrits: blancsInscrits,
                            blancsVotants: blancsVotants,
                            nuls: nuls,
                            nulsInscrits: nulsInscrits,
                            nulsVotants: nulsVotants,
                            candidats: []
                        };
                        if (parseInt(result.departement) === depValue) {
                            for (var i = 0; i < 19; ++i) {
                                var _a = candidats.slice(i * 9, i * 9 + 9), numeroPanneau = _a[0], nuance = _a[1], nom = _a[2], prenom = _a[3], sexe = _a[4], voix = _a[5], voixInscrits = _a[6], voixExprimes = _a[7], elu = _a[8];
                                result.candidats.push({
                                    numeroPanneau: numeroPanneau,
                                    nuance: nuance,
                                    nom: nom,
                                    prenom: prenom,
                                    sexe: sexe,
                                    voix: voix,
                                    voixInscrits: voixInscrits,
                                    voixExprimes: voixExprimes,
                                    elu: elu
                                });
                            }
                            console.log("YES", result.candidats[0]);
                            writeStream.write("".concat(isFirst ? "" : ", ").concat(JSON.stringify(result)));
                            if (isFirst) {
                                isFirst = false;
                            }
                        }
                        else {
                            console.log(result.departement);
                        }
                    }
                    else {
                        console.log("LENGTH", columns.length);
                    }
                });
                writeStream.write("]");
                writeStream.end();
                return [2 /*return*/];
        }
    });
}); };
splitResultsPerDep("34");
