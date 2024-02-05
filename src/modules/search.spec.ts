import search from "./search.ts";
import { InvalidOptionsError } from "../lib/errors.ts";

import testSymbols from "../../tests/testSymbols.ts";
import testYf from "../../tests/testYf.ts";

const yf = testYf({ search });

describe("search", () => {
  // See also common module tests in moduleExec.spec.ts

  const testSearches = testSymbols({
    add: [
      "Evolution Gaming Group", // STO
      "Bayerische Motoren Werke AG", // GER
      "NO0010123060", // has no shortname! (#31)
      "EUR", // a currency
      "BJ0CDD2", // additionalProperty: { exchDisp: "London" }
    ],
  });

  // validate different searches
  it.each(testSearches)(
    "passed validation for search '%s'",
    async (testSearch) => {
      const devel = `search-${testSearch}.json`;
      await yf.search(testSearch, {}, { devel });
    }
  );
});
