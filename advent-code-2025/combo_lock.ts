import { start } from "repl";

export function comboLock(lines: string[]): number {
  let numZeros = 0;

  lines.reduce((total, line) => {
    const direction = line[0];
    const value = Number(line.slice(1));
    // console.log(line);
    let result = direction === "L" ? total - value : total + value;
    result = result % 100;
    if (result < 0) {
      result += 100;
    }
    if (result === 0) {
      numZeros++;
    }
    return result;
  }, 50);

  return numZeros;
}

export function comboLock2(lines: string[]): number {
  // console.log(`STARTING comboLock2 with lines: ${lines} ----------------`);
  let numZeros = 0;

  lines.reduce((lastDial, line) => {
    const direction = line[0];
    let adjustment = Number(line.slice(1));
    let dial = lastDial;

    while (adjustment > 0) {
      if (direction === "L") {
        dial = dial === 0 ? 99 : dial - 1;
      } else {
        dial = dial === 99 ? 0 : dial + 1;
      }

      if (dial === 0) {
        numZeros++;
      }

      adjustment--;
    }
    // console.log(`DONE ${line} lock is lockResult: ${dial} and there are ${numZeros} zeros`);
    return dial;
  }, 50);

  return numZeros;
}

// export function comboLock2(lines: string[]): number {
//   console.log(`STARTING comboLock2 with lines: ${lines} ----------------`);
//   let numZeros = 0;
//   let wasLastDialZero = false;

//   lines.reduce((total, line) => {
//     const direction = line[0];
//     const adjustment = Number(line.slice(1));

//     let lock = direction === "L" ? total - adjustment : total + adjustment;
//     console.log(`lock after spin ${line} is ${lock} (zeros: ${numZeros})`);
//     while (lock < 0) {
//       lock += 100;
//       console.log(`adding 100 (lock ${lock}`);
//       if (wasLastDialZero) {
//         wasLastDialZero = false;
//         console.log(`not adding a 0 because we were on 0 (zeros: ${numZeros})`);
//       } else {
//         numZeros++;
//         console.log(`added a 0 (zeros: ${numZeros})`);
//       }
//     }
//     while (lock > 99) {
//       lock -= 100;
//       if (wasLastDialZero) {
//         wasLastDialZero = false;
//         console.log(`not adding a 0 because we were on 0 (zeros: ${numZeros})`);
//       } else {
//         numZeros++;
//         console.log(`added a 0 (zeros: ${numZeros})`);
//       }
//       console.log(`subtracting 100 (lock ${lock}, zeros: ${numZeros})`);
//     }
//     // if (lock === 0) {
//     //   if (wasLastDialZero) {
//     //     wasLastDialZero = false;
//     //     console.log(`not adding a 0 because we were on 0 (zeros: ${numZeros})`);
//     //   } else {
//     //     numZeros++;
//     //     console.log(`added a 0 (zeros: ${numZeros})`);
//     //   }
//     //   console.log(`adding a 0 because we landed on 0`);
//     // }

//     console.log(`DONE ${line} lock is lockResult: ${lock} and there are ${numZeros} zeros`);
//     return lock;
//   }, 50);

//   return numZeros;
// }

// export function comboLock2(lines: string[]): number {
//   let numZeros = 0;
//   let lastDial = 50;

//   lines.reduce((total, line) => {
//     const direction = line[0];
//     const value = Number(line.slice(1));
//     let currentDial = direction === "L" ? total - value : total + value;
//     console.log(
//       `starting. line: ${line}, last dial: ${lastDial}, current dial: ${currentDial}, zeros: ${numZeros}`
//     );
//     while (currentDial < 0 || currentDial > 99) {
//       console.log(
//         `out of bounds. line: ${line}, last dial: ${lastDial}, current dial: ${currentDial}, zeros: ${numZeros}`
//       );
//       if (currentDial < 0) {
//         currentDial += 100;
//       } else {
//         currentDial -= 100;
//       }
//       console.log(
//         `fixed bounds. line: ${line}, last dial: ${lastDial}, current dial: ${currentDial}, zeros: ${numZeros}`
//       );
//       if (lastDial !== 0 && currentDial !== 0) {
//         console.log(`adding a 0 because of math`);
//         numZeros++;
//       }
//       lastDial = currentDial;
//     }
//     if (currentDial === 0) {
//       console.log(`adding a 0 because we landed there`);
//       numZeros++;
//     }
//     console.log(
//       `ending. line: ${line}, last dial: ${lastDial}, current dial: ${currentDial}, zeros: ${numZeros}`
//     );
//     lastDial = currentDial;
//     return currentDial;
//   }, 50);

//   return numZeros;
// }
