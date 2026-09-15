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

export function day5b(rows: string[]): number {
  let total = 0;

  rows.sort((a, b) => {
    const [aStart, aEnd] = a.split("-").map(Number);
    const [bStart, bEnd] = b.split("-").map(Number);
    if (aStart !== bStart) {
      return aStart - bStart;
    }
    return aEnd - bEnd;
  });
  console.log("sorted rows", rows);

  const noOverlapRows = [];
  for (let i = 0; i < rows.length - 1; i++) {
    // console.log("row", rows[i]);
    // console.log("next row", rows[i + 1]);
    if (rows[i] === rows[i + 1]) {
      console.log(`duplicate row, continuing: ${rows[i]}`);
      continue;
    }
    const [start, end] = rows[i].split("-").map(Number);
    const [nextStart, nextEnd] = rows[i + 1].split("-").map(Number);
    // overlap
    if (end >= nextStart) {
      // if they start the same, then this row is inside the next one and we can skip it
      if (start === nextStart) {
        console.log(`this row is inside the next one, skipping it: ${rows[i]}`);
        continue;
      }
      // if this row ends after the start of the next one, we should truncate this range
      console.log(
        `found overlap, changing this row to ${start}-${nextStart - 1}. next row is ${rows[i + 1]}`
      );
      rows[i] = `${start}-${nextStart - 1}`;
    }
    noOverlapRows.push(rows[i]);
  }
  noOverlapRows.push(rows[rows.length - 1]);
  console.log("non-overlapping rows", noOverlapRows);

  for (const noRow of noOverlapRows) {
    const [start, end] = noRow.split("-").map(Number);
    total += end - start + 1;
  }

  console.log(`total: ${total}`);
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
