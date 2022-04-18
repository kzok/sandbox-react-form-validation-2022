import { greet } from "../greet";

describe(greet, () => {
  it("can greet.", () => {
    expect(greet("foo")).toBe("Hello, foo.");
    expect(greet("world")).toBe("Hello, world.");
  });
});
