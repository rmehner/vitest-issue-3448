import { afterEach, expect, it, vi } from "vitest";

let globalSpy = vi.spyOn(global, "global", "get");

afterEach(() => {
  // commenting this line, or downgrading to 0.31.0 fixes the problem
  vi.restoreAllMocks();
});

it("returns NOT FOUND when variable has not been set", () => {
  globalSpy.mockImplementation(() => ({ GLOBAL_VAR: undefined }));
  expect(global.GLOBAL_VAR).toEqual(undefined);
});

it("returns the value of variable if it has been set", () => {
  globalSpy.mockImplementation(() => ({ GLOBAL_VAR: "👋" }));
  expect(global.GLOBAL_VAR).toEqual("👋");
});
