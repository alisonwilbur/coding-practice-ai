export function getStringChar(arr: string[], arrayIndex: number, charIndex: number): number {
  const char = arr[arrayIndex]?.[charIndex] ?? "";
  return char === "@" ? 1 : 0;
}

export function day10(rows: string[]): number {
  let total = 0;
  let adjacentTotal = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      adjacentTotal = 0;

      if (row[colIndex] === "@") {
        // found roll, check adjacent (n, ne, e, se, s, sw, w, nw)
        adjacentTotal += getStringChar(rows, rowIndex - 1, colIndex);
        adjacentTotal += getStringChar(rows, rowIndex - 1, colIndex + 1);
        adjacentTotal += getStringChar(rows, rowIndex, colIndex + 1);
        adjacentTotal += getStringChar(rows, rowIndex + 1, colIndex + 1);
        adjacentTotal += getStringChar(rows, rowIndex + 1, colIndex);
        adjacentTotal += getStringChar(rows, rowIndex + 1, colIndex - 1);
        adjacentTotal += getStringChar(rows, rowIndex, colIndex - 1);
        adjacentTotal += getStringChar(rows, rowIndex - 1, colIndex - 1);
        if (adjacentTotal < 4) {
          total++;
        }
      }
    }
  }

  return total;
}
