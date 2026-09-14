// fresh cafeteria food
export function day5(rows: string[]): number {
  let total = 0;
  const freshRanges: string[] = [];

  // food ranges
  rows.map((row) => {
    // console.log(row);
    if (row === "") {
      return;
    }
    freshRanges.push(row);
  });

  freshRanges.sort((a, b) => {
    const [aStart, aEnd] = a.split("-").map(Number);
    const [bStart, bEnd] = b.split("-").map(Number);
    if (aStart !== bStart) {
      return aStart - bStart;
    }
    return aEnd - bEnd;
  });
  console.log("freshRanges", freshRanges);

  // specific foods
  rows.map((row) => {
    const foodID = Number(row);
    for (const range of freshRanges) {
      const [start, end] = range.split("-").map(Number);
      if (foodID >= start && foodID <= end) {
        total++;
        break;
      }
    }
  });

  return total;
}

// export function day5(rows: string[]): number {
//   const foodToFreshnessMap = new Array<number>();
//   let total = 0;

//   rows.map((row) => {
//     console.log(row);
//     if (row === "") {
//       return;
//     }
//     const [s, e] = row.split("-");
//     const [start, end] = [Number(s), Number(e)];
//     for (let i = start; i <= end; i++) {
//       foodToFreshnessMap[i] = 1;
//     }
//   });

//   console.log("foodToFreshnessMap", foodToFreshnessMap);

//   rows.map((row) => {
//     const foodID = Number(row);
//     if (foodToFreshnessMap[foodID]) {
//       total++;
//     }
//   });

//   return total;
// }

//export function day5(rows: string[]): number {
//   const foodToFreshnessMap = new Map<string, boolean>();
//   let total = 0;

//   rows.map((row) => {
//     console.log(row);
//     if (row === "") {
//       return;
//     }
//     const [s, e] = row.split("-");
//     const [start, end] = [Number(s), Number(e)];
//     for (let i = start; i <= end; i++) {
//       foodToFreshnessMap.set(`${i}`, true);
//     }
//   });

//   console.log("foodToFreshnessMap", foodToFreshnessMap);

//   rows.map((row) => {
//     const foodID = Number(row);
//     if (foodToFreshnessMap.has(`${foodID}`)) {
//       total++;
//     }
//   });

//   return total;
// }
