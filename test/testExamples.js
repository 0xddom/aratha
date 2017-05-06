/* global describe it context */

"use strict";

const child_process = require("child_process");
const path = require("path");

const _ = require("lodash");
const glob = require("glob");

const { testCVC4, testZ3 } = require("./testUtils");

describe("the analysis", function() {
    const scriptPath = path.resolve(__dirname, "../../src/js/commands/jalangi.js");
    const examplesDir = path.resolve(__dirname, "examples");
    const analysisDir = path.resolve(__dirname, "../");

    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
    const files = glob.sync("example+([0-9]).js", { nosort: true, cwd: examplesDir, absolute: true });
    files.sort(collator.compare);

    context("with CVC4", function() {
        const cvc4Path = testCVC4();
        _.forEach(files, function(filePath) {
            const testName = path.basename(filePath, ".js");
            it(`correctly executes ${testName}`, function(done) {
                child_process.execFile(
                    "node", [scriptPath, "--analysis", analysisDir, filePath], {
                        env: {
                            SMT_SOLVER: "cvc4",
                            CVC4_PATH: cvc4Path
                        }
                    }, done);
            });
        });
    });

    context("with Z3", function() {
        const z3Path = testZ3();
        _.forEach(files, function(filePath) {
            const testName = path.basename(filePath, ".js");
            it(`correctly executes ${testName}`, function(done) {
                child_process.execFile(
                    "node", [scriptPath, "--analysis", analysisDir, filePath], {
                        env: {
                            SMT_SOLVER: "z3",
                            Z3_PATH: z3Path
                        }
                    }, done);
            });
        });
    });
});