/* global describe context it */

const child_process = require("child_process");
const path = require("path");
const { testCVC4, testZ3 } = require("./testUtils");

describe("running CVC4", function() {
  context("on common.smt2", function() {
    const cvc4Path = testCVC4();
    it("should terminate with no errors", function(done) {
      const filePath = path.resolve(__dirname, "../lib/smt2/common.smt2");
      child_process.execFile(cvc4Path, ["--lang=smt2", "--strings-exp", "--incremental", filePath], done);
    });
  });
});

describe("running Z3", function() {
  context("on common.smt2", function() {
    const z3Path = testZ3();
    it("should terminate with no errors", function(done) {
      const preludePath = path.resolve(__dirname, "../lib/smt2/z3/prelude.smt2");
      const filePath = path.resolve(__dirname, "../lib/smt2/common.smt2");
      child_process.execFile(z3Path, ["-smt2", preludePath, filePath], done);
    });
  });
});

describe("running Z3Str", function() {
  context("on common.smt2", function() {
    const z3Path = testZ3();
    it("should terminate with no errors", function(done) {
      const preludePath = path.resolve(__dirname, "../lib/smt2/z3str/prelude.smt2");
      const filePath = path.resolve(__dirname, "../lib/smt2/common.smt2");
      child_process.execFile(z3Path, ["-smt2", "smt.string_solver=z3str3", preludePath, filePath], done);
    });
  });
});
