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
  // console.log("sorted rows", rows);

  let i = 0;
  while (i < rows.length - 1) {
    const [start, end] = rows[i].split("-").map(Number);
    const [nextStart, nextEnd] = rows[i + 1].split("-").map(Number);
    if (end < nextStart) {
      // console.log(`no overlap, continuing: [${rows[i]}], [${rows[i + 1]}]`);
      i++;
      continue;
    }
    // console.log(`merging [${rows[i]}], [${rows[i + 1]}] to [${start}-${Math.max(end, nextEnd)}]`);
    rows[i] = `${start}-${Math.max(end, nextEnd)}`;
    rows.splice(i + 1, 1);
  }
  // console.log("merged rows", rows);

  for (const mRow of rows) {
    const [start, end] = mRow.split("-").map(Number);
    total += end - start + 1;
  }

  return total;
}
