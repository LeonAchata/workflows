import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "./greet.js";

test("greets by name", () => {
  assert.equal(greet("Leon"), "Hello, Leon!");
});
