import autoc from "./autoc.ts";

describe("autoc", () => {
  it("throws", () => expect(autoc()).rejects.toThrow(/issues\/337/));
});
