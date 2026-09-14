import { getStringChar } from "./day4";

export function day4b(rows: string[]): number {
  let multiRemovalTotal = 0;
  let total = 0;

  do {
    total = 0;

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        let adjacentTotal = 0;

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
            rows[rowIndex] =
              rows[rowIndex].substring(0, colIndex) + "." + rows[rowIndex].substring(colIndex + 1);
          }
        }
      }
    }
    multiRemovalTotal += total;
  } while (total != 0);

  return multiRemovalTotal;
}
