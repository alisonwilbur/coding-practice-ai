import { readFileSync } from "fs";
import { join } from "path";
import { comboLock, comboLock2 } from "./combo_lock";

// describe("comboLock", () => {
//   it("example from problem", () => {
//     const spins = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];
//     expect(comboLock(spins)).toBe(3);
//   });

//   it("spins over 100", () => {
//     const spins = ["L68", "L30", "R48", "L5", "R60", "L55", "L300", "L1", "L99", "R14", "L82"];
//     expect(comboLock(spins)).toBe(4);
//   });

//   it("spins from file", () => {
//     const spins = readFileSync(join(__dirname, "lock_spins.txt"), "utf-8").trim().split("\n");
//     expect(comboLock(spins)).toBe(1118);
//   });
// });

// console.log(comboLock(lines));

describe("comboLock2", () => {
  it("spin up 0", () => {
    const spins = ["L50"];
    expect(comboLock2(spins)).toBe(1);
  });

  it("spin down 0", () => {
    const spins = ["R50"];
    expect(comboLock2(spins)).toBe(1);
  });

  it("spin over 100", () => {
    const spins = ["R305"];
    expect(comboLock2(spins)).toBe(3);
  });

  it("spin 1000", () => {
    const spins = ["R1000"];
    expect(comboLock2(spins)).toBe(10);
  });

  it("few spins", () => {
    // 0, 0
    const spins = ["L50", "R100"];
    expect(comboLock2(spins)).toBe(2);
  });

  it("few spins over 100", () => {
    const spins = ["L50", "R100", "L300"];
    expect(comboLock2(spins)).toBe(5);
  });

  it("example many 0s left", () => {
    // 0, 1, 0, 5, 55
    // 1, 1, 2, 3, 4
    const spins = ["L50", "R1", "L1", "R105", "L50"];
    expect(comboLock2(spins)).toBe(4);
  });

  it("example many 0s right", () => {
    // 0, 1, 0
    // 1, 1, 2
    const spins = ["R50", "L1", "R1"];
    expect(comboLock2(spins)).toBe(2);
  });

  it("example from problem", () => {
    const spins = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];
    expect(comboLock2(spins)).toBe(6);
  });

  it("spins from file", () => {
    const spins = readFileSync(join(__dirname, "lock_spins.txt"), "utf-8").trim().split("\n");
    expect(comboLock2(spins)).toBe(6289);
  });
});
